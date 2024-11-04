export const idlFactory = ({ IDL }) => {
  const PortfolioItem = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
  });
  const Testimonial = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'text' : IDL.Text,
    'avatarUrl' : IDL.Text,
  });
  const ContactForm = IDL.Record({
    'name' : IDL.Text,
    'email' : IDL.Text,
    'message' : IDL.Text,
  });
  return IDL.Service({
    'getPortfolioItems' : IDL.Func([], [IDL.Vec(PortfolioItem)], ['query']),
    'getTestimonials' : IDL.Func([], [IDL.Vec(Testimonial)], ['query']),
    'submitContactForm' : IDL.Func([ContactForm], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
