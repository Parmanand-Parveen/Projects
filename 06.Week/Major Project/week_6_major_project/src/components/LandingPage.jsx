import React, { useState, useEffect } from 'react';
import Rating from './Rating';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold dark:text-white">YourBrand</h1>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#how-it-works" className="hover:text-blue-500 dark:text-white dark:hover:text-blue-400">How It Works</a></li>
            <li><a href="#featured-boxes" className="hover:text-blue-500 dark:text-white dark:hover:text-blue-400">Boxes</a></li>
            <li><a href="#pricing" className="hover:text-blue-500 dark:text-white dark:hover:text-blue-400">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500 dark:text-white dark:hover:text-blue-400">Testimonials</a></li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover h-screen flex items-center justify-center text-center">
        <div className="text-gray-900 dark:text-white px-4 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold">Discover New Surprises Every Month</h1>
          <p className="mt-4 text-lg md:text-xl">Curated subscription boxes filled with products just for you</p>
          <button className="mt-6 px-8 py-3 bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300">Get Started</button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8 dark:text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-gray-800 dark:text-gray-300">
            <h3 className="text-xl font-bold">Step 1</h3>
            <p>Choose your subscription box</p>
          </div>
          <div className="text-gray-800 dark:text-gray-300">
            <h3 className="text-xl font-bold">Step 2</h3>
            <p>Personalize your box based on your preferences</p>
          </div>
          <div className="text-gray-800 dark:text-gray-300">
            <h3 className="text-xl font-bold">Step 3</h3>
            <p>Get it delivered to your door every month</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-boxes" className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">Featured Boxes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white sm:h-max lg:h-full dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <img src="https://cfimg.wowcher.co.uk/cdn-cgi/image/height=487,width=727,quality=85,format=auto/https://static.wowcher.co.uk/images/deal/27604887/1330951.jpg" alt="Box 1" className="w-full h-4/5 mb-4 rounded object-cover" />
            <h3 className="text-xl font-bold dark:text-white">Luxury Beauty Box</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">A curated selection of high-end beauty products to pamper yourself.</p>
          </div>
          <div className="bg-white sm:h-max lg:h-full dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <img src="https://static.wixstatic.com/media/3c060c_fdaaff3364bd428a9609cbe590137827~mv2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3c060c_fdaaff3364bd428a9609cbe590137827~mv2.jpg" alt="Box 2" className="w-full h-4/5 mb-4 rounded object-cover" />
            <h3 className="text-xl font-bold dark:text-white">Fitness Essentials Box</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Everything you need to keep your fitness goals on track.</p>
          </div>
          <div className="bg-white sm:h-max lg:h-full dark:bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <img src="https://m.media-amazon.com/images/I/619LuuLyOdL.jpg" alt="Box 3" className="w-full h-4/5 mb-4 rounded object-cover" />
            <h3 className="text-xl font-bold dark:text-white">Gourmet Snacks Box</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Delicious, hand-picked snacks for your monthly cravings.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8 dark:text-white">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="italic dark:text-gray-300">"The luxury beauty box exceeded my expectations! Every month feels like a special treat."</p>
            <Rating/>
            <p className="mt-4 font-bold dark:text-white">- Sarah J.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="italic dark:text-gray-300">"I love the variety and quality of the fitness essentials. It motivates me to keep going!"</p>
            <Rating/>
            <p className="mt-4 font-bold dark:text-white">- Mark D.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 dark:text-white">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Monthly Plan</h3>
            <p className="text-gray-500 dark:text-gray-300">$29.99/month</p>
            <ul className="mt-4 mb-6 dark:text-gray-300">
              <li>✓ 1 curated box per month</li>
              <li>✓ Free shipping</li>
              <li>✓ Cancel anytime</li>
            </ul>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Subscribe Now</button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Quarterly Plan</h3>
            <p className="text-gray-500 dark:text-gray-300">$79.99/3 months</p>
            <ul className="mt-4 mb-6 dark:text-gray-300">
              <li>✓ 1 curated box per month</li>
              <li>✓ Free shipping</li>
              <li>✓ Save $10</li>
            </ul>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Subscribe Now</button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Annual Plan</h3>
            <p className="text-gray-500 dark:text-gray-300">$299.99/year</p>
            <ul className="mt-4 mb-6 dark:text-gray-300">
              <li>✓ 1 curated box per month</li>
              <li>✓ Free shipping</li>
              <li>✓ Save $60</li>
            </ul>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Subscribe Now</button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8 dark:text-white">Frequently Asked Questions</h2>
        <div className="px-4 md:px-0 text-gray-800 dark:text-gray-300">
          <div className="mb-6">
            <h3 className="text-xl font-bold">What’s included in the subscription box?</h3>
            <p className="mt-2">Each box contains a variety of curated products based on your preferences.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Can I skip a month or cancel?</h3>
            <p className="mt-2">Yes, you can pause, skip, or cancel your subscription anytime.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">When will I receive my box?</h3>
            <p className="mt-2">Your box will be shipped within 5-7 business days of your order.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>© 2024 Your Brand Name - All Rights Reserved</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-gray-400">Instagram</a>
          <a href="#" className="mx-2 hover:text-gray-400">Facebook</a>
          <a href="#" className="mx-2 hover:text-gray-400">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
