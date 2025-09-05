/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * User types
 */
export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
  role?: 'user' | 'admin';
}

export interface UserResponse {
  success: boolean;
  data?: User;
  error?: string;
}

export interface UsersResponse {
  success: boolean;
  data?: User[];
  error?: string;
}

/**
 * Trade types
 */
export interface Trade {
  _id: string;
  userId: string | User;
  symbol: string;
  type: 'buy' | 'sell';
  quantity: number;
  price: number;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface CreateTradeRequest {
  userId: string;
  symbol: string;
  type: 'buy' | 'sell';
  quantity: number;
  price: number;
}

export interface UpdateTradeStatusRequest {
  status: 'pending' | 'completed' | 'cancelled';
}

export interface TradeResponse {
  success: boolean;
  data?: Trade;
  error?: string;
}

export interface TradesResponse {
  success: boolean;
  data?: Trade[];
  error?: string;
}
