import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

function Feed() {
  return <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post 
        profilePic="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-1/71066809_613352465861456_7087646673576394752_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0R-v9WL1S8MAX84R2n3&tn=nJk5wUMMWhwR4Bwj&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8LDHMZBRNTkKrDl4UuV5N6Ggkxz5CDCpUK-qekVhEmog&oe=6258004D"
        message="Tươi không cần tưới"
        timeStamp="This is the timeStamp"
        userName="Vân Mây"
        image="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/275778737_1219562598573770_429215207990529589_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=cUdddAbfVXUAX-AkLKV&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT9SkZ6AKWVXygnyuKOUoAleejoTgwgyAFw6iQFA6uc_uw&oe=623740E7"/>
      <Post 
        profilePic="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/223063419_103299358690640_8951620186852844590_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-5&_nc_sid=c6021c&_nc_ohc=ubjXBXzs7WoAX-FqfZv&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT-k2QPN1KP3VLaV8GUhBWLYWRBli2wQtpdUyaKWXzhE3g&oe=623727FF"
        message="Một nụ cười luôn hé 😁😁"
        timeStamp="This is the timeStamp"
        userName="Trần Ngọc Yến"
        image="https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/275606946_172735008413741_8303807942288767894_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=L1e28c7Hf40AX-IiGRe&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT-KtfRtlR4MgcX5C62y4Il--edhF5F6IeRpuDa_47nMCA&oe=62376B9A"/>
      <Post />
  </div>;
}

export default Feed