import React from "react";
import { Badge } from "../ui/badge";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import tcc from "../../assets/tcc.png";
import GDSC from "../../assets/GDSC.png";

import SearchableWrapper from '../Searchbar/SearchableWrapper';

const ClubsAchievements = () => {
  const clubs = [
    {
      name: "Techno Cultural Club",
      description: "Runs coding contests, hackathons, robotics, quizzes, poster-making & cultural events.",
      members: 150,
      category: "Technical & Cultural",
      facultyAdvisor: "Dr. Vimlesh Kumar Ray",
      image: tcc,
      socialLinks: {
        instagram: "https://instagram.com/technoculture_gbu",
        linkedin: "https://linkedin.com/company/techno-club-gbu",
        email: "techno.ict.gbu@gmail.com",
      },
    },
    {
      name: "GDSC – Google Developer Student Club",
      description: "Peer-run community for workshops in Web Dev, Cloud, ML under GDSC umbrella.",
      members: 500,
      category: "Technical",
      facultyAdvisor: "Dr. Rajesh Mishra",
      image: GDSC,
      socialLinks: {
        instagram: "https://instagram.com/gdsc_gbu",
        linkedin: "https://linkedin.com/company/gdsc-gautam-buddha-university",
        email: "gdsc@gbu.ac.in",
      },
    },
    {
      name: "IEEE Student Branch",
      description: "Professional branch organizing tech talks, paper contests & networking.",
      members: 60,
      category: "Professional",
      facultyAdvisor: "Dr. Vikram Singh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxT9G3gSxNZESl4NJH1NzcPq0kBF1XNyHcA&s",
      socialLinks: {
        linkedin: "https://linkedin.com/company/ieeestudentbranch",
        twitter: "https://twitter.com/ieeestudents",
        email: "ieee@gbu.ac.in",
      },
    },
    {
      name: "Programming / CodeChef Chapter",
      description: "Competitive coding community hosting Code Matrix, Learn to Code & hackathons.",
      members: 200,
      category: "Technical",
      facultyAdvisor: "Dr. Anurag Singh Baghel",
      image: "https://repository-images.githubusercontent.com/389157855/a2869f47-24d9-4e16-a6cc-b944855dc5f7",
      socialLinks: {
        instagram: "https://instagram.com/codechef_gbu",
        email: "codechef@gbu.ac.in",
      },
    },
    {
      name: "Robotics Club",
      description: "Builds autonomous systems & competes in national robotics events.",
      members: 45,
      category: "Technical",
      facultyAdvisor: "Dr. Vimlesh Kumar Ray",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dlCh4LMQ-987UX_Ssas6havujpWSVCmIGw&s",
      socialLinks: {
        twitter: "https://twitter.com/robiotics_gbu",
        email: "robotics@gbu.ac.in",
      },
    },
    {
      name: "Dhrishtikon – Debate Society",
      description: "Promotes free discussion, public speaking & debate competitions.",
      members: 80,
      category: "Cultural",
      facultyAdvisor: "Dr. Manjari Suman",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiaFXt6eK5fEvem3rwrqMkO-O3ERZm0rV9g&s",
      socialLinks: {
        linkedin: "https://linkedin.com/company/drishtikon-gbu",
        email: "drishtikon@gbu.ac.in",
      },
    },
    {
      name: "Cultural Council",
      description: "Oversees Drama, Dance, Music, Painting, Photography, Literature, Adventure clubs.",
      members: 300,
      category: "Cultural",
      facultyAdvisor: "Dr. Anand Pratap Singh",
      image: "https://www.palmbeachculture.com/wp/wp-content/uploads/2025/06/Art-Calls-32.jpg",
      socialLinks: {
        facebook: "https://facebook.com/abhivyanjana",
        instagram: "https://instagram.com/abhivyanjana_gbu",
        email: "cultural@gbu.ac.in",
      },
    },
    {
      name: "Adventure Club",
      description: "Organizes trekking, camping and outdoor adventure activities.",
      members: 60,
      category: "Adventure",
      facultyAdvisor: "Dr. Sunita Gupta",
      image: "https://i.pinimg.com/736x/2a/9b/fd/2a9bfd335b50e86e48ad59b4b28aa5b5.jpg",
      socialLinks: {
        email: "adventure@gbu.ac.in",
      },
    },
    {
      name: "Photography Club",
      description: "Encourages campus photography exhibitions & workshops.",
      members: 50,
      category: "Creative",
      facultyAdvisor: "Dr. Vidushi Sharma",
      image: "https://image-static.collegedunia.com/public/reviewPhotos/899143/unnamed.jpg",
      socialLinks: {
        instagram: "https://instagram.com/photoclub_gbu",
        email: "photography@gbu.ac.in",
      },
    },
    {
      name: "Art & Painting Club",
      description: "Hosts workshops & exhibitions to nurture visual arts on campus.",
      members: 40,
      category: "Creative",
      facultyAdvisor: "Dr. Anand Pratap Singh",
      image: "https://images.squarespace-cdn.com/content/v1/604e4790cbfeea1a501ac957/1664284358990-4TBHSR3TPHO2A3M8O79V/teen+photo.jpeg",
      socialLinks: {
        email: "art@gbu.ac.in",
      },
    },
  ];

  const renderSocialIcon = (platform, url) => {
    const baseClass = "w-5 h-5 transition-colors cursor-pointer";
    const getClass = {
      facebook: `${baseClass} text-gray-600 hover:text-blue-600`,
      instagram: `${baseClass} text-gray-600 hover:text-pink-500`,
      twitter: `${baseClass} text-gray-600 hover:text-sky-500`,
      linkedin: `${baseClass} text-gray-600 hover:text-blue-700`,
      email: `${baseClass} text-gray-600 hover:text-red-500`,
    }[platform];

    const openLink = () => {
      if (platform === "email") {
        window.open(`mailto:${url}`, "_blank");
      } else {
        window.open(url, "_blank");
      }
    };

    const icons = {
      facebook: Facebook,
      instagram: Instagram,
      twitter: Twitter,
      linkedin: Linkedin,
      email: Mail,
    };

    const Icon = icons[platform];
    return Icon ? <Icon className={getClass} onClick={openLink} /> : null;
  };

  return (
    <SearchableWrapper>
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Student Clubs & Activities</h2>
          <p className="text-xl text-gray-600">Fostering leadership and innovation</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-xl transition">
              <div className="relative">
                <img src={club.image} alt="club" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white">{club.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-college-navy text-lg font-semibold mb-2">{club.name}</h4>
                <p className="text-gray-600 mb-3">{club.description}</p>
                <p className="text-sm text-gray-500 mb-1">Faculty Advisor:</p>
                <p className="text-sm font-medium text-college-navy mb-3">{club.facultyAdvisor}</p>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-500">Members:</span>
                  <span className="font-semibold text-college-blue">{club.members}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-center gap-4">
                    {Object.entries(club.socialLinks).map(([platform, url]) => (
                      <div key={platform}>{renderSocialIcon(platform, url)}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default ClubsAchievements;
