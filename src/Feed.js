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
        profilePic="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-1/195279424_590234861951199_5600001195746738007_n.jpg?stp=c0.8.40.40a_cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0T5wSJdWNhkAX9G1ZHy&tn=nJk5wUMMWhwR4Bwj&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT9kQsjOVq14QzD7T5bi2Hh0D4bkSIrrfpJbzdHePb9Jjg&oe=62561D5A"
        message="Nay nghệ xíu nha"
        timeStamp="This is the timeStamp"
        userName="Chau Bui"
        image="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/275049346_761139811527369_3701608182100645675_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=uveDELdgKmEAX_EWwwJ&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT8KsZ-Gog8PG6T8s1ZHrHXQpGzdXC8Hn7g2BHPb1xrdOg&oe=6235BBEB"/>
      <Post 
        profilePic="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/223063419_103299358690640_8951620186852844590_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-5&_nc_sid=c6021c&_nc_ohc=ubjXBXzs7WoAX-FqfZv&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT-k2QPN1KP3VLaV8GUhBWLYWRBli2wQtpdUyaKWXzhE3g&oe=623727FF"
        message="Một nụ cười luôn hé 😁😁"
        timeStamp="This is the timeStamp"
        userName="Trần Ngọc Yến"
        image="https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/275606946_172735008413741_8303807942288767894_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=L1e28c7Hf40AX-IiGRe&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT-KtfRtlR4MgcX5C62y4Il--edhF5F6IeRpuDa_47nMCA&oe=62376B9A"/>
      <Post 
        profilePic="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/275841200_1911310185727448_2508303657986779718_n.jpg?stp=c0.11.40.40a_cp0_dst-jpg_p40x40&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=tqvvZdNJ8AQAX96acIb&tn=nJk5wUMMWhwR4Bwj&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT9IcpNCiXhx65wE_4QnIo5K9U-9zP4ZFca66NTYlrcycA&oe=6235DC4A"
        message="Đang nghĩ về aaaaaaaa 😝😝😝"
        timeStamp="This is the timeStamp"
        userName="Gia Hân Phùng"
        image="https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/275789274_172359041784671_7818251544744705086_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=RWu6yzCnnOAAX_AInm2&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT8b7o0ZV8XzamfQoVbPQstjIBCKjpBRWg8DLDbBhG6wcA&oe=6236E94B"/>
  </div>;
}

export default Feed