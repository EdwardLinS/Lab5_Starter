// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test isPhoneNumber return true
test('Checks if real phone number is phone number 1', () => {
  expect(isPhoneNumber("800-888-8888")).toBe(true);
});

// Test isPhoneNumber return true
test('Checks if real phone number is phone number 2', () => {
  expect(isPhoneNumber("626-626-6262")).toBe(true);
});

// Test isPhoneNumber return false
test('Checks if non phone number is not phone number 1', () => {
  expect(isPhoneNumber("00-88-888")).toBe(false);
});

// Test isPhoneNumber return false
test('Checks if non phone number is not phone number 2', () => {
  expect(isPhoneNumber("1234")).toBe(false);
});


// Test isEmail return true
test('Checks if real email is email 1', () => {
  expect(isEmail("youtube@ucsd.edu")).toBe(true);
});

// Test isEmail return true
test('Checks if real email is email 2', () => {
  expect(isEmail("realemail123@ucsd.edu")).toBe(true);
});

// Test isEmail return false
test('Checks if non-email is not an email 1', () => {
  expect(isEmail("google.com")).toBe(false);
});

// Test isEmail return false
test('Checks if non-email is not an email 2', () => {
  expect(isEmail("potato")).toBe(false);
});


// Test isStrongPassword return true
test('Checks if strong password is marked as strong 1', () => {
  expect(isStrongPassword("FouR124_")).toBe(true);
});

// Test isStrongPassword return true
test('Checks if strong password is marked as strong 2', () => {
  expect(isStrongPassword("Watermelon")).toBe(true);
});

// Test isStrongPassword return false
test('Checks if weak password is marked as weak 1', () => {
  expect(isStrongPassword("####")).toBe(false);
});

// Test isStrongPassword return false
test('Checks if weak password is marked as weak 2', () => {
  expect(isStrongPassword("A")).toBe(false);
});


// Test isDate return true
test('Checks if real date is marked as a date 1', () => {
  expect(isDate("5/1/2024")).toBe(true);
});

// Test isDate return true
test('Checks if real date is marked as a date 2', () => {
  expect(isDate("01/01/2025")).toBe(true);
});

// Test isDate return false
test('Checks if non-date is marked as a non-date 1', () => {
  expect(isDate("1/43/10")).toBe(false);
});

// Test isDate return false
test('Checks if non-date is marked as a non-date 2', () => {
  expect(isDate("1/10")).toBe(false);
});


// Test isHexColor return true
test('Checks if hex color is marked as true 1', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

// Test isHexColor return true
test('Checks if hex color is marked as true 2', () => {
  expect(isHexColor("#000000")).toBe(true);
});

// Test isHexColor return false
test('Checks if non-hex color is marked as false', () => {
  expect(isHexColor("red")).toBe(false);
});

// Test isHexColor return false
test('Checks if non-hex color is marked as false', () => {
  expect(isHexColor("#")).toBe(false);
});

