import React, { useState } from 'react';

import { useToast } from '../../hooks/use-toast';



// Minimal UI replacements
const Button = ({ children, className = '', ...props }) => (
  <button className={`px-4 py-2 rounded-md font-medium ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className = '', ...props }) => (
  <input className={`w-full p-2 border rounded-md ${className}`} {...props} />
);

const Textarea = ({ className = '', ...props }) => (
  <textarea className={`w-full p-2 border rounded-md ${className}`} {...props} />
);

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-700">
    {children}
  </label>
);

const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Custom Dialog
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => onOpenChange(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

const DialogContent = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow-xl p-6 ${className}`}>{children}</div>
);

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;

const DialogTitle = ({ children, className = '' }) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);




const HostelBookingModal = ({ isOpen, onClose, hostel, onSubmit }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Book Room - {hostel?.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="studentName">Full Name *</Label>
            <Input id="studentName" name="studentName" required placeholder="Enter your full name" />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <Label htmlFor="roomType">Room Type *</Label>
            <select id="roomType" name="roomType" required className="w-full p-2 border rounded-md">
              <option value="">Select room type</option>
              <option value="single">Single Room</option>
              <option value="double">Double Sharing</option>
              <option value="triple">Triple Sharing</option>
            </select>
          </div>
          <div>
            <Label htmlFor="duration">Duration *</Label>
            <select id="duration" name="duration" required className="w-full p-2 border rounded-md">
              <option value="">Select duration</option>
              <option value="semester">One Semester</option>
              <option value="year">One Academic Year</option>
              <option value="custom">Custom Duration</option>
            </select>
          </div>
          <div>
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea id="specialRequests" name="specialRequests" placeholder="Any special requirements or preferences..." />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Submit Booking Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};


const HostelCarousel = ({ hostels, currentHostel, onHostelClick }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {hostels.map((hostel, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              currentHostel === index ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
            }`}
            onClick={() => onHostelClick(index)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{hostel.name}</h3>
                  <p className="text-sm opacity-90">{hostel.capacity}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const HostelDetails = ({ hostel, onViewDetails, onBookRoom }) => {
  return (
    <div className="mt-12">
      <Card className="overflow-hidden shadow-2xl">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {hostel.name}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {hostel.description}
              </p>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {hostel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => onViewDetails(hostel)}
                >
                  View Details
                </Button>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => onBookRoom(hostel)}
                >
                  Book Room
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};



const HostelLife = () => {
  const [currentHostel, setCurrentHostel] = useState(0);
  const [selectedHostelDetails, setSelectedHostelDetails] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const hostels = [
    {
      id: 1,
      name: 'Boys Hostel',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      capacity: '500 Students',
      amenities: ['24/7 WiFi', 'Mess Facility', 'Laundry', 'Common Room', 'Study Hall', 'Recreation Center'],
      description: 'Modern accommodation facility for male undergraduate and postgraduate students.',
      fullDescription: 'Boys Hostel offers comfortable accommodation with modern amenities and a vibrant community atmosphere. The hostel includes spacious rooms with attached bathrooms, high-speed internet connectivity, round-the-clock security, and various recreational facilities to ensure a well-rounded campus life experience.',
      rules: ['No smoking in rooms', 'Visitors allowed until 9 PM', 'Quiet hours: 10 PM - 6 AM', 'Mess timings: 7 AM - 10 PM', 'ID card required for entry'],
      images: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 2,
      name: 'Girls Hostel',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      capacity: '450 Students',
      amenities: ['Enhanced Security', 'Garden Access', 'Beauty Salon', 'Sports Room', 'Library Corner', 'Wellness Center'],
      description: 'Safe and comfortable accommodation for female undergraduate and postgraduate students.',
      fullDescription: 'Girls Hostel provides a secure and comfortable living environment with modern amenities and enhanced security measures. The hostel features beautiful common areas, specialized facilities for female students, and a supportive community that fosters academic excellence and personal growth.',
      rules: ['Enhanced security protocols', 'Visitor timings: 10 AM - 7 PM', 'Common room access till 10 PM', 'Regular health check-ups', 'Biometric access system'],
      images: [
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 3,
      name: 'PhD Residence',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      capacity: '200 Research Scholars',
      amenities: ['Private Study Rooms', 'Research Library', 'High-Speed Internet', 'Conference Rooms', 'Computer Lab', 'Printing Facility'],
      description: 'Specialized accommodation for PhD students and research scholars with advanced academic facilities.',
      fullDescription: 'PhD Residence is designed specifically for research scholars pursuing doctoral studies. It offers quiet study environments, specialized research facilities, and academic support services to facilitate high-quality research work and scholarly pursuits.',
      rules: ['24/7 access with research ID', 'Study rooms bookable in advance', 'Research library access included', 'Conference room booking available', 'Quiet environment maintained'],
      images: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 4,
      name: 'International Students Hostel',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      capacity: '150 International Students',
      amenities: ['Cultural Exchange Center', 'International Cuisine', 'Language Support', 'Orientation Programs', 'Travel Assistance', 'Multi-Faith Prayer Room'],
      description: 'Dedicated accommodation for international students with cultural integration support.',
      fullDescription: 'International Students Hostel provides a welcoming environment for students from around the world. It features cultural integration programs, international cuisine options, language support services, and specialized assistance to help international students adapt to campus life and Indian culture.',
      rules: ['Passport/visa verification required', 'Cultural orientation mandatory', 'Multi-language support available', 'International student advisor access', 'Cultural celebration participation encouraged'],
      images: [
        'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop'
      ]
    }
  ];

  const handleViewDetails = (hostel) => {
    setSelectedHostelDetails(hostel);
  };

  const handleBookRoom = (hostel) => {
    setCurrentHostel(hostels.findIndex(h => h.id === hostel.id));
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingData = {
      hostel: hostels[currentHostel].name,
      studentName: formData.get('studentName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      roomType: formData.get('roomType'),
      duration: formData.get('duration'),
      specialRequests: formData.get('specialRequests')
    };

    console.log('Booking submitted:', bookingData);

    toast({
      title: "Booking Request Submitted",
      description: `Your request for ${hostels[currentHostel].name} has been submitted successfully. You will receive a confirmation email within 24 hours.`,
    });

    setIsBookingOpen(false);
    e.target.reset();
  };

  return (
    <section id="hostel-life" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Hostel Life</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience comfortable living with world-class amenities in our modern hostel facilities designed for diverse student communities.
          </p>
        </div>

        <HostelCarousel
          hostels={hostels}
          currentHostel={currentHostel}
          onHostelClick={setCurrentHostel}
        />

        <HostelDetails
          hostel={hostels[currentHostel]}
          onViewDetails={handleViewDetails}
          onBookRoom={handleBookRoom}
        />

        {selectedHostelDetails && (
          <Dialog open={!!selectedHostelDetails} onOpenChange={() => setSelectedHostelDetails(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] bg-white overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedHostelDetails.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedHostelDetails.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedHostelDetails.name} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">About this Hostel</h3>
                  <p className="text-gray-600 mb-4">{selectedHostelDetails.fullDescription}</p>
                  <p className="text-lg font-medium text-blue-600">Capacity: {selectedHostelDetails.capacity}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedHostelDetails.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Rules & Guidelines</h3>
                  <ul className="space-y-2">
                    {selectedHostelDetails.rules.map((rule, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        <HostelBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          hostel={hostels[currentHostel]}
          onSubmit={handleBookingSubmit}
        />
      </div>
    </section>
  );
};

export default HostelLife;
