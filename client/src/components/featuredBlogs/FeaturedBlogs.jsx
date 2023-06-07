import React from 'react'
import classes from './featuredBlogs.module.css'
import mountainImg1 from '../../assets/mountains.jpg'
import natureImg from '../../assets/nature.jpg'
import musicImg from '../../assets/music.jpg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={mountainImg1} alt="" />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>Mountains</h4>
                <p className={classes.blogDesc}>
                 With the lovely, lush green forests and foothills, the tantalizing teal lakes hidden away like a secret prize waiting to be found, and those stunning sky-high jagged peaks, it was love at first sight
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Ananya</span>
                  <span><span>Created:</span> 12-02-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={musicImg} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Music</h4>
                <p className={classes.desc}>
                  The above-listed music quotes can keep you inspired and help you enjoy your favorite tunes even better
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Akshita</span>
                  <span><span>Created:</span> 13-06-2023</span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={natureImg} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Nature</h4>
                <p className={classes.desc}>
                  nature is everything we are surrounded by like the water we drink, the air we breathe, the sun we soak in, the birds we hear chirping, the moon we gaze at and more.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span>Sooraj</span>
                  <span><span>Created:</span> 22-05-2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs