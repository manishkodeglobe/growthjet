import React from 'react'

function Podcast() {
  return (
     <section className='Recent_podcast'>
        <div className='container'>
            <div className='Recentpodecast_headings'>
                <h5 className='podcast_heading'>Recent Podcast</h5>
                <h4 className='allh4_text_sub_headings text-white'>Podcast that inspire you to grow</h4>
            </div>

            <div className='row'>
                <div className='col-sm-4'>
                    <img className='text_with_img' src='./images/podcast1.jpg' alt='image'/>
                    <div className='person_img_name_follow ml-1 '>
                        <img className='rounded-circle' src='./images/pod1.png' alt='image'/>
                            <div className='row pods_details'> 
                                <h6 className='text-white pl-3'>Jonathan Taylor</h6>
                                <span className='follow-span pl-2'>31.4K</span>        
                            </div>
                    </div>
                </div>

                <div className='col-sm-4'>
                    <img className='text_with_img' src='./images/podcast2.png' alt='image'/>
                    <div className='person_img_name_follow ml-1 '>
                        <img className='rounded-circle' src='./images/pod2.png' alt='image'/>
                            <div className='row pods_details'> 
                                <h6 className='text-white pl-3'>Jonathan Taylor</h6>
                                <span className='follow-span pl-2'>31.4K</span>        
                            </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <img className='text_with_img' src='./images/podcast3.png' alt='image'/>
                    <div className='person_img_name_follow ml-1 '>
                        <img className='rounded-circle' src='./images/pod3.png' alt='image'/>
                            <div className='row pods_details'> 
                                <h6 className='text-white pl-3'>Jonathan Taylor</h6>
                                <span className='follow-span pl-2'>31.4K</span>        
                            </div>
                    </div>
                </div>
            </div>
 
        </div>
     </section>

 
  )
}

export default Podcast;
