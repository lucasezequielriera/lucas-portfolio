export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_NAME = 100;
export const MAX_EMAIL = 254;
export const MAX_MESSAGE = 5000;
export const MIN_NAME = 2;
export const MIN_MESSAGE = 10;

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function validateContactForm(fields: {
  name: string;
  email: string;
  message: string;
}): { valid: true } | { valid: false; error: string; status: 400 } {
  const { name, email, message } = fields;

  if (!name || !email || !message) {
    return { valid: false, error: "All fields are required.", status: 400 };
  }
  if (name.length < MIN_NAME) {
    return {
      valid: false,
      error: `Name must be at least ${MIN_NAME} characters.`,
      status: 400,
    };
  }
  if (name.length > MAX_NAME) {
    return {
      valid: false,
      error: `Name must be ${MAX_NAME} characters or less.`,
      status: 400,
    };
  }
  if (email.length > MAX_EMAIL || !EMAIL_RE.test(email)) {
    return {
      valid: false,
      error: "Please provide a valid email address.",
      status: 400,
    };
  }
  if (message.length < MIN_MESSAGE) {
    return {
      valid: false,
      error: `Message must be at least ${MIN_MESSAGE} characters.`,
      status: 400,
    };
  }
  if (message.length > MAX_MESSAGE) {
    return {
      valid: false,
      error: `Message must be ${MAX_MESSAGE} characters or less.`,
      status: 400,
    };
  }
  return { valid: true };
}
