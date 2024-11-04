import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Time "mo:base/Time";

actor {
    // Types
    public type PortfolioItem = {
        id: Nat;
        title: Text;
        description: Text;
        imageUrl: Text;
    };

    public type Testimonial = {
        id: Nat;
        name: Text;
        text: Text;
        avatarUrl: Text;
    };

    public type ContactForm = {
        name: Text;
        email: Text;
        message: Text;
    };

    // State
    private stable var portfolioItems : [PortfolioItem] = [
        {
            id = 1;
            title = "Modern Minimalist Living Room";
            description = "A clean, contemporary design focusing on functionality and space";
            imageUrl = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
        },
        {
            id = 2;
            title = "Luxury Master Bedroom";
            description = "Elegant master suite with custom lighting and premium finishes";
            imageUrl = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
        },
        {
            id = 3;
            title = "Contemporary Kitchen Design";
            description = "State-of-the-art kitchen with island and premium appliances";
            imageUrl = "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
        }
    ];

    private stable var testimonials : [Testimonial] = [
        {
            id = 1;
            name = "Sarah Johnson";
            text = "The team transformed our space beyond our expectations. Truly amazing work!";
            avatarUrl = "https://randomuser.me/api/portraits/women/1.jpg";
        },
        {
            id = 2;
            name = "Michael Chen";
            text = "Professional, creative, and attentive to every detail. Highly recommended!";
            avatarUrl = "https://randomuser.me/api/portraits/men/1.jpg";
        },
        {
            id = 3;
            name = "Emma Thompson";
            text = "They created the perfect balance of style and functionality in our home.";
            avatarUrl = "https://randomuser.me/api/portraits/women/2.jpg";
        }
    ];

    private stable var contactForms : [ContactForm] = [];

    // Queries
    public query func getPortfolioItems() : async [PortfolioItem] {
        portfolioItems
    };

    public query func getTestimonials() : async [Testimonial] {
        testimonials
    };

    // Updates
    public func submitContactForm(form: ContactForm) : async () {
        contactForms := Array.append(contactForms, [form]);
    };
}
