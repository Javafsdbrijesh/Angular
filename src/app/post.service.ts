import { Injectable } from "@angular/core";
import {Post} from './post.model';

@Injectable({providedIn:'root'})
export class PostService{
    listOfPosts: Post[] = [
        new Post(
          'Taj Mahal',
          'The Taj Mahal is an enormous mausoleum complex commissioned in 1632 by the Mughal emperor Shah Jahan to house the remains of his beloved wife. Constructed over a 20-year period on the southern bank of the Yamuna River in Agra, India, the famed complex is one of the most outstanding examples of Mughal architecture, which combined Indian, Persian and Islamic influences. At its center is the Taj Mahal itself, built of shimmering white marble that seems to change color depending on the daylight. Designated a UNESCO World Heritage site in 1983, it remains one of the world’s most celebrated structures and a stunning symbol of India’s rich history.',
          'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg',
          'javafsd@gmail.com',
          new Date()
        ),
        new Post(
          'Jal Mahal',
          'Set in the middle of the picturesque Man Sagar Lake, Jal Mahal (Water Palace) in Jaipur is a spectacular structure that seems to be floating on the lake’s surface. An architectural marvel in itself, it is an embodiment of the engineering prowess of the Rajput period. The palace, which was built as a hunting lodge for the Maharajas of Jaipur, has now become one of the prime tourist attractions in the city. While planning your trip, don’t forget to book your hotels in Jaipur such that you have easy access to this magnificent palace and other forts and historical attractions in the city.',
          'https://jaipurtourism.co.in/images/places-to-visit/header/jal-mahal-jaipur-entry-fee-timings-holidays-reviews-header.jpg',
          'javafsd@gmail.com',
          new Date()
        ),
        new Post(
          'Hampi',
          'Set in an awesome boulder-strewn landscape along the banks of the Tungabhadra River, Hampi was the capital city of the magnificent capital of the mighty Vijayanagara Empire. Founded by Harihara and Bukka in 1336, it fell to the Muslim rulers of the Deccan in 1565, and the city was pillaged over a period of six months before being abandoned. The once-proud city of victory is now a city of desolation. However, the ruins of these historical monuments have withstood the ravages of man and time, and still evoke memories of the grandeur of a bygone era. Classified as a World Heritage Site by UNESCO, this historic town is also the “World’s Largest Open-air Museum” and covers an area of nearly 29 sq km. Vijayanagara Empire at its peak was very prosperous and was believed to be larger than Rome with palaces grander than of Lisbon  “The city is such that the pupil of the eye has never seen a place like it, and the ear of intelligence has never been informed that there existed anything to equal it in the world”, marvelled a 15th century Persian ambassador Abdul Razaak. There were opulent palaces, marvelous temples, massive fortifications, baths, markets, aquaducts, pavilions, stables for royal elephants, and elegantly carved pillars. This was a city whose merchants traded in diamonds, pearls, horses, fine silks and brocades. Most of the important structures and ruins are located in two areas, which are generally referred to as the Royal Centre and the Sacred Centre. The Royal Centre in the south-west part of the site contains structures that seem to have been palaces, baths, pavilions, royal stables and temples for ceremonial use. The Sacred Centre stretches around the Virupaksha Temple and the Hampi Bazaar area and is along the banks of the holy Tungabhadra River. The ruins of Hampi are extensive and fascinating enough to absorb your attention for several days. The best way to experience this UNESCO World Heritage Site is to take a leisurely stroll through the eloquent ruins or take a bicycle/ bike ride. If you are hard-pressed for time, a day or two will suffice  to see all the important structures. However, photography, archaeology buffs, yoga enthusiasts should plan on staying a little longer.',
          'https://www.holidify.com/images/bgImages/HAMPI.jpg',
          'javafsd@gmail.com',
          new Date()
        ),
      ];

      getPosts(){
          return this.listOfPosts;
      }

      deletePost(index: number){
          this.listOfPosts.splice(index, 1);
      }

      addPost(post: Post){
        this.listOfPosts.push(post);
      }

      updatePost(index:number, post: Post){
        this.listOfPosts[index] = post;
      }
      getPost(index: number){
        return this.listOfPosts[index];
      }
}