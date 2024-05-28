import React from 'react';
import LawyerHome from '../home/LawyerHome';
import SavedBlogs from '../../userProfile/SavedBlogs';



function LawyerSavedBlogs() {
  return (
    <LawyerHome ind={3} component={<SavedBlogs/>}/>
  );
}

export default LawyerSavedBlogs;
