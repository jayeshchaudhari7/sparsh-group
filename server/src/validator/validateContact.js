
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^\d{10}$/;

export function validateContact(req, res, next) {
  const { name, email, phone, message } = req.body || {};
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!email || !emailRe.test(email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!phone || !phoneRe.test(String(phone))) {
    errors.phone = "Phone number must contain exactly 10 digits";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  next();
}
