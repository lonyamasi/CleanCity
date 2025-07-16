import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
//import { login as mockAuthLogin, getCurrentUser } from '../services/authService';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
      useLocation: () => ({ state: {} }),
    }));


// Mock services
jest.mock('../services/authService', () => ({
  //login: jest.fn(),
  login: jest.fn(() => ({ email: 'test@example.com' })),
  getCurrentUser: jest.fn(() => null),
  //getCurrentUser: jest.fn(() => ({ email: 'test@example.com' })),
}));


// Helper to render with router
//const renderWithRouter = (component) => {
  //return render(<MemoryRouter>{<>{component}</>}</MemoryRouter>);
//  return render(<MemoryRouter>{component}</MemoryRouter>);
//};

describe('Login Component', () => {
  const renderWithRouter = (component) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };
//describe('Login Component', () => {
//  test('focus on email input on mount', () => {
//    renderWithRouter(<Login />);
//    const emailInput = screen.getByPlaceholderText(/email/i);
//    expect(emailInput).toHaveFocus();
//  });
//describe('Login Component', () => {
//  beforeEach(() => {
//    mockNavigate.mockReset();
//  });

  test('focus on email input on mount', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toHaveFocus();
  });

  test('displays error if form submitted empty', () => {
    renderWithRouter(<Login />);
    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/please enter email and password/i)).toBeInTheDocument();
  });

  test('submits form with valid input and calls onLogin', () => {
    const mockOnLogin = jest.fn();
    renderWithRouter(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'Pass123' },
    });
    fireEvent.click(screen.getByText(/login/i));

    expect(mockOnLogin).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(mockNavigate).toHaveBeenCalledWith('/profile', { replace: true });
  });

  test('redirects to profile if already logged in', () => {
    // 👇 Override the default getCurrentUser mock to simulate logged in state
    const { getCurrentUser } = require('../services/authService');
    getCurrentUser.mockImplementation(() => ({ email: 'loggedin@example.com' }));

    renderWithRouter(<Login />);
    expect(mockNavigate).toHaveBeenCalledWith('/profile', { replace: true });
  });
});
  