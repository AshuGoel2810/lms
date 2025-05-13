import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import TopFeatures from './components/TopFeatures';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import FeaturedCourses from './components/FeaturedCourses';
import MorePower from './components/MorePower';
import CustomerData from './components/CustomerData';
import WordPressThems from './components/WordPressThems';
import StudentFeedbacks from './components/StudentFeedback';
import CoursePage from './components/CoursePage';
import BlogPage from './components/BlogPage';
import ContactUs from './components/ContactUs';
import ReviewPage from './components/ReviewPage';
import Progress from './components/Progress'
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <TopFeatures />
              <FeaturedCourses/>
              <MorePower/>
              <CustomerData/>
              <WordPressThems/>
              <StudentFeedbacks/>
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/CoursePage" element={<CoursePage />}/>
          <Route path='/BlogPage' element={<BlogPage/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path='/ReviewPage' element={<ReviewPage/>}/>
          <Route path='/Progress' element={<Progress/>}/>
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
