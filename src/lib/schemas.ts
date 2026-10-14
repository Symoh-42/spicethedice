import { z } from "zod";

export const projectTypes = [
  "Music Video",
  "Film",
  "Short Film",
  "Social Content",
  "Entertainment Show",
  "Graphic Design",
  "VFX",
  "Brand Content",
  "Other",
] as const;

export const budgetRanges = [
  "Prefer not to say",
  "Under KSh 50K",
  "KSh 50K–150K",
  "KSh 150K–300K",
  "KSh 300K+",
  "Custom",
] as const;

export const enquirySchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  projectType: z.enum(projectTypes),
  budget: z.enum(budgetRanges),
  timeline: z.string().optional(),
  description: z.string().min(10, "Tell us a bit more about the project"),
  referenceLinks: z.string().optional(),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;

export const projectBriefSchema = z.object({
  projectName: z.string().min(2, "Enter a project name"),
  clientArtist: z.string().optional(),
  projectType: z.enum(projectTypes),
  creativeIdea: z.string().min(10, "Describe the creative idea"),
  referenceLinks: z.string().optional(),
  shootLocation: z.string().optional(),
  preferredDate: z.string().optional(),
  distributionPlatform: z.string().optional(),
  expectedDeliverables: z.string().optional(),
  budget: z.enum(budgetRanges),
  additionalNotes: z.string().optional(),
  contactName: z.string().min(2, "Enter your name"),
  contactEmail: z.string().email("Enter a valid email"),
});

export type ProjectBriefValues = z.infer<typeof projectBriefSchema>;

export const deliveryMethods = ["Delivery", "Pick-up"] as const;

export const merchOrderSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(9, "Enter a phone number we can reach you on"),
  email: z.string().email("Enter a valid email"),
  deliveryMethod: z.enum(deliveryMethods),
  location: z.string().min(2, "Where should we deliver / which town are you in?"),
  notes: z.string().optional(),
  items: z
    .array(
      z.object({
        slug: z.string(),
        color: z.string(),
        size: z.string().optional(),
        quantity: z.number().int().min(1).max(50),
      })
    )
    .min(1, "Your cart is empty"),
});

export type MerchOrderValues = z.infer<typeof merchOrderSchema>;
