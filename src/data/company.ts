export interface CompanyInfo {
  name: string;
  tagline: string;
  establishmentYear: number;
  yearsOfExperience: string;
  phone: string;
  phoneFormatted: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
  };
  workingHours: {
    weekdays: string;
    sunday: string;
  };
  whatsappUrl: string;
  googleMapsUrl: string;
  metrics: {
    experience: string;
    experienceLabel: string;
    spacesRealized: string;
    spacesLabel: string;
    governance: string;
    governanceLabel: string;
    googleRating: string;
    googleReviewsNote: string;
  };
}

export const companyData: CompanyInfo = {
  name: "4U Interior Decorator",
  tagline: "Spatial Architecture & Interior Craftsmanship",
  establishmentYear: 2014,
  yearsOfExperience: "10+",
  phone: "08122709961",
  phoneFormatted: "081227 09961",
  address: {
    line1: "New No.26, Swami Nellaiappar High Rd",
    line2: "",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    pincode: "627001",
  },
  workingHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:30 PM",
    sunday: "Sunday: By Pre-Booked Appointment",
  },
  whatsappUrl: "https://wa.me/918122709961?text=Hello%204U%20Interior%20Decorator,%20I%20would%20like%20to%20request%20an%20interior%20consultation",
  googleMapsUrl: "https://maps.google.com/?q=New+No.26+Swami+Nellaiappar+High+Rd+Tirunelveli+Tamil+Nadu+627001",
  metrics: {
    experience: "10+",
    experienceLabel: "Years of Spatial Craftsmanship",
    spacesRealized: "450+",
    spacesLabel: "Spaces Realized",
    governance: "100%",
    governanceLabel: "Turnkey Governance",
    googleRating: "4.8 / 5.0",
    googleReviewsNote: "Google Verified • 100+ Tirunelveli Homes",
  },
};
