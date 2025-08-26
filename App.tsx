import React from 'react';
import { Search, Menu, ChevronDown, Star, Download, Play, Apple, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const examCategories = [
    { name: 'LIC AAO', icon: '🏢' },
    { name: 'UP Police Sub Inspector', icon: '👮' },
    { name: 'SSC CGL', icon: '📊' },
    { name: 'UPSSSC PET', icon: '🏃' },
    { name: 'IBPS PO', icon: '🏦' },
    { name: 'RRB NTPC', icon: '🚂' },
    { name: 'RRB Group D', icon: '🔧' },
    { name: 'IBPS Clerk', icon: '📝' }
  ];

  const examPapers = [
    {
      title: 'LIC AAO',
      category: 'Insurance',
      papers: '45 Papers',
      attempts: '15K+ Attempts',
      rating: 4.5,
      languages: 'Hindi, English',
      tests: '890+ tests | 18 free',
      color: 'bg-orange-500',
      badge: 'Prepp+'
    },
    {
      title: 'SSC CHSL',
      category: 'Staff Selection',
      papers: '42 Papers',
      attempts: '12K+ Attempts',
      rating: 4.3,
      languages: 'Hindi, English',
      tests: '1200+ tests | 23 free',
      color: 'bg-green-500',
      badge: 'New'
    },
    {
      title: 'RRB NTPC',
      category: 'Railway',
      papers: '38 Papers',
      attempts: '18K+ Attempts',
      rating: 4.6,
      languages: 'Hindi, English',
      tests: '750+ tests | 15 free',
      color: 'bg-blue-500',
      badge: 'Prepp+'
    },
    {
      title: 'IBPS PO',
      category: 'Banking',
      papers: '52 Papers',
      attempts: '22K+ Attempts',
      rating: 4.4,
      languages: 'Hindi, English',
      tests: '1100+ tests | 28 free',
      color: 'bg-purple-500',
      badge: 'Prepp+'
    },
    {
      title: 'SSC CGL Constable',
      category: 'Staff Selection',
      papers: '35 Papers',
      attempts: '9K+ Attempts',
      rating: 4.2,
      languages: 'Hindi, English',
      tests: '650+ tests | 12 free',
      color: 'bg-red-500',
      badge: 'New'
    },
    {
      title: 'RRB NTPC',
      category: 'Railway',
      papers: '40 Papers',
      attempts: '16K+ Attempts',
      rating: 4.5,
      languages: 'Hindi, English',
      tests: '820+ tests | 20 free',
      color: 'bg-green-600',
      badge: 'Prepp+'
    },
    {
      title: 'SSC CGL',
      category: 'Staff Selection',
      papers: '60 Papers',
      attempts: '25K+ Attempts',
      rating: 4.7,
      languages: 'Hindi, English',
      tests: '1500+ tests | 35 free',
      color: 'bg-orange-600',
      badge: 'Prepp+'
    },
    {
      title: 'RRB Stenographer',
      category: 'Railway',
      papers: '28 Papers',
      attempts: '7K+ Attempts',
      rating: 4.1,
      languages: 'Hindi, English',
      tests: '480+ tests | 10 free',
      color: 'bg-orange-500',
      badge: 'New'
    },
    {
      title: 'IBPS CLERK',
      category: 'Banking',
      papers: '48 Papers',
      attempts: '19K+ Attempts',
      rating: 4.3,
      languages: 'Hindi, English',
      tests: '950+ tests | 22 free',
      color: 'bg-blue-600',
      badge: 'Prepp+'
    },
    {
      title: 'JEE A',
      category: 'Engineering',
      papers: '55 Papers',
      attempts: '30K+ Attempts',
      rating: 4.8,
      languages: 'Hindi, English',
      tests: '1800+ tests | 40 free',
      color: 'bg-orange-500',
      badge: 'Prepp+'
    },
    {
      title: 'CTET',
      category: 'Teaching',
      papers: '32 Papers',
      attempts: '11K+ Attempts',
      rating: 4.0,
      languages: 'Hindi, English',
      tests: '600+ tests | 14 free',
      color: 'bg-purple-600',
      badge: 'New'
    },
    {
      title: 'UPSC Prelims',
      category: 'Civil Services',
      papers: '65 Papers',
      attempts: '35K+ Attempts',
      rating: 4.9,
      languages: 'Hindi, English',
      tests: '2000+ tests | 45 free',
      color: 'bg-yellow-500',
      badge: 'Prepp+'
    },
    {
      title: 'NEET',
      category: 'Medical',
      papers: '50 Papers',
      attempts: '28K+ Attempts',
      rating: 4.6,
      languages: 'Hindi, English',
      tests: '1300+ tests | 30 free',
      color: 'bg-red-600',
      badge: 'New'
    }
  ];

  const faqs = [
    "Why should one go for solving previous year's papers?",
    "Are the previous year papers enough to prepare for the recruitment exams?",
    "Where will I get the previous year's papers?",
    "What should I practice more for SSC exams from the previous year papers?",
    "How many previous year's papers are recommended for candidates to practice?",
    "I am preparing for banking exams, will I get RRB's previous year papers on facebook or practice book?",
    "Can I find free NTPC previous year papers on facebook?",
    "Can I find the previous year papers for RRB NTPC and RRB Group D recruitment?",
    "I was looking for NEET previous year papers. Will I get a book?",
    "Will the previous year papers be in accordance with the latest format?",
    "Will the previous year papers tell me the exact count of questions for different subjects?"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Prepp</div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Test Series</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Live Tests</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Past Papers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Quizzes</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Live Quizzes</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Current Affairs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 bg-orange-100 px-3 py-1 rounded">News</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-500" />
              <button className="text-blue-600 hover:text-blue-800">Login / Register</button>
            </div>
          </div>
        </div>
      </header>

      {/* Popular Exams Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Previous Year Papers for all Popular Govt. Exams</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {examCategories.map((exam, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">{exam.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{exam.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Papers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Previous Year Paper of all Exams</h2>
          {/* Exam Filter Tabs */}
          <div className="mb-8">
            <div className="relative">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-10">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">All Exams</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">SSC Exams</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">Banking Exams</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">Teaching Exams</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">Civil Services Exam</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">Railways Exams</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">Engineering Recruitment Exam</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">Defence Exams</button>
              </div>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          {/* Exam Filter Tabs */}
          {/* Year Filter Tabs */}
          <div className="mb-6">
            <div className="relative">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-10">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">All Years</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">2024</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">2023</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">2022</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">2021</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">2020</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 whitespace-nowrap">2019</button>
              </div>
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examPapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-8 h-8 ${paper.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-lg font-bold">{paper.title.split(' ').map(word => word.charAt(0)).join('')}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {paper.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        paper.badge === 'Prepp+' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {paper.badge}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1">{paper.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{paper.papers}</p>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-600 font-medium text-sm">{paper.attempts}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{paper.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-3">{paper.languages}</p>
                <p className="text-orange-500 font-medium text-sm mb-4">{paper.tests}</p>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  View Test
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQs of Previous Year Papers</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-medium">{faq}</p>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Start Your Preparation with Prepp Mobile App</h2>
              <p className="text-blue-100 text-lg mb-8">
                Download the app to have access to all the test series, previous year papers, and live classes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Apple className="w-5 h-5 mr-2" />
                  Google Play
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  App Store
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-4 shadow-2xl">
                <div className="w-64 h-96 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-2xl"></div>
                  <div className="p-6 pt-12">
                    <div className="text-white text-2xl font-bold mb-2">Prepp</div>
                    <div className="bg-orange-500 rounded-lg p-4 mb-4">
                      <div className="text-white text-sm font-medium">Current Affairs</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-white text-xs">Banking Preparation</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-white text-xs">SSC Preparation</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-3">
                        <div className="text-white text-xs">Over 10,000 Questions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Prepp</div>
              <div className="space-y-2 text-blue-100">
                <p>Government Exams & Jobs</p>
                <p>Test Series</p>
                <p>Live Classes</p>
                <p>Current Affairs</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Government Exams & Jobs</h3>
              <div className="space-y-2 text-blue-100 text-sm">
                <p>SSC</p>
                <p>Banking</p>
                <p>Railway</p>
                <p>Teaching</p>
                <p>Insurance</p>
                <p>State Govt</p>
                <p>Defence</p>
                <p>UPSC</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Previous Year Papers</h3>
              <div className="space-y-2 text-blue-100 text-sm">
                <p>SSC CGL</p>
                <p>SSC CHSL</p>
                <p>SSC MTS</p>
                <p>SSC Stenographer</p>
                <p>SSC GD Constable</p>
                <p>SSC JE</p>
                <p>SSC Selection Post</p>
                <p>SSC CPO</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Exams</h3>
              <div className="space-y-2 text-blue-100 text-sm">
                <p>Live Mock Tests</p>
                <p>Test Series</p>
                <p>Previous Year Papers</p>
                <p>Free Mock Tests</p>
                <p>Online Test Series</p>
                <p>Current Affairs</p>
                <p>GK Questions</p>
                <p>Study Material</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
            <p>© Prepp 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;