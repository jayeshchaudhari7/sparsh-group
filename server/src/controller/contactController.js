import contact from "../models/contact.js";

export async function createContact(req, res) {
  try {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
      id: contact._id,
    });
  } catch (error) {
    console.error("Create contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to save your contact request",
    });
  }
}

export async function getContacts(req, res) {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Get contacts error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contacts",
    });
  }
}