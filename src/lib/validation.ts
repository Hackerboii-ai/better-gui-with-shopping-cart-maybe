// Validation utilities and schemas

export interface ValidationError {
  field: string;
  message: string;
}

export const validateEmail = (email: string): ValidationError | null => {
  if (!email) {
    return { field: 'email', message: 'Email is required' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { field: 'email', message: 'Please enter a valid email address' };
  }
  
  return null;
};

export const validatePassword = (password: string): ValidationError | null => {
  if (!password) {
    return { field: 'password', message: 'Password is required' };
  }
  
  if (password.length < 6) {
    return { field: 'password', message: 'Password must be at least 6 characters long' };
  }
  
  if (password.length > 128) {
    return { field: 'password', message: 'Password must be less than 128 characters' };
  }
  
  return null;
};

export const validateName = (name: string, fieldName: string = 'name'): ValidationError | null => {
  if (!name) {
    return { field: fieldName, message: `${fieldName} is required` };
  }
  
  if (name.length < 2) {
    return { field: fieldName, message: `${fieldName} must be at least 2 characters long` };
  }
  
  if (name.length > 50) {
    return { field: fieldName, message: `${fieldName} must be less than 50 characters` };
  }
  
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(name)) {
    return { field: fieldName, message: `${fieldName} can only contain letters, spaces, hyphens, and apostrophes` };
  }
  
  return null;
};

export const validatePhone = (phone: string): ValidationError | null => {
  if (!phone) {
    return { field: 'phone', message: 'Phone number is required' };
  }
  
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  if (digitsOnly.length < 10) {
    return { field: 'phone', message: 'Phone number must be at least 10 digits' };
  }
  
  if (digitsOnly.length > 15) {
    return { field: 'phone', message: 'Phone number must be less than 15 digits' };
  }
  
  return null;
};

export const validateRequired = (value: string, fieldName: string): ValidationError | null => {
  if (!value || value.trim() === '') {
    return { field: fieldName, message: `${fieldName} is required` };
  }
  
  return null;
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): ValidationError | null => {
  if (value.length < minLength) {
    return { field: fieldName, message: `${fieldName} must be at least ${minLength} characters long` };
  }
  
  return null;
};

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): ValidationError | null => {
  if (value.length > maxLength) {
    return { field: fieldName, message: `${fieldName} must be less than ${maxLength} characters` };
  }
  
  return null;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): ValidationError | null => {
  if (password !== confirmPassword) {
    return { field: 'confirmPassword', message: 'Passwords do not match' };
  }
  
  return null;
};

export const validatePrice = (price: number): ValidationError | null => {
  if (price < 0) {
    return { field: 'price', message: 'Price cannot be negative' };
  }
  
  if (price > 1000000) {
    return { field: 'price', message: 'Price cannot exceed $1,000,000' };
  }
  
  return null;
};

export const validateQuantity = (quantity: number): ValidationError | null => {
  if (quantity < 0) {
    return { field: 'quantity', message: 'Quantity cannot be negative' };
  }
  
  if (quantity > 1000) {
    return { field: 'quantity', message: 'Quantity cannot exceed 1000' };
  }
  
  if (!Number.isInteger(quantity)) {
    return { field: 'quantity', message: 'Quantity must be a whole number' };
  }
  
  return null;
};

// Form validation helpers
export const validateForm = (formData: Record<string, any>, validationRules: Record<string, (value: any) => ValidationError | null>): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  for (const [field, validator] of Object.entries(validationRules)) {
    const error = validator(formData[field]);
    if (error) {
      errors.push(error);
    }
  }
  
  return errors;
};

export const getFieldError = (errors: ValidationError[], fieldName: string): string | undefined => {
  const error = errors.find(error => error.field === fieldName);
  return error?.message;
};

export const hasFieldError = (errors: ValidationError[], fieldName: string): boolean => {
  return errors.some(error => error.field === fieldName);
};
