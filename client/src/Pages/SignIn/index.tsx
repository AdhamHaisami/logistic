import React from 'react';

import SignInForm from './SignInForm';

import Footer from '../../Components/Footer';
import Layout from '../../Layout';

const SignIn: React.FC = () => {
  return (
   <Layout>
       <SignInForm />
        <Footer />
   </Layout>
  );
}

export default SignIn;
