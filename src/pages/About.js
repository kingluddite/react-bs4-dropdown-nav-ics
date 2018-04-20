import React, { Component } from 'react'
// import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Jumbotron from './../components/Jumbotron';

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Jumbotron title="About" subtitle="This is who we are" />
        <div className="container">
          <h1>About</h1>
          <p>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nam voluptate unde? Velit distinctio, perspiciatis dolor ut dolorum illum facilis natus! Ipsam repellendus aperiam officia quae aut eum et cum.</span>
            <span>Modi, animi in. Quas atque dolorem voluptatem at velit mollitia similique labore aliquam corrupti doloribus earum explicabo, quo laudantium totam, numquam amet eum temporibus voluptatibus quidem modi eveniet hic iste.</span>
            <span>Obcaecati, labore? Corporis, in laboriosam numquam aliquid deserunt ad? Consequuntur architecto, debitis illum aperiam labore minus ullam? Necessitatibus commodi eaque, deleniti sed in debitis id rem temporibus sequi laudantium reprehenderit?</span>
            <span>Eveniet perferendis vitae esse aliquam molestias veritatis fuga voluptas numquam natus soluta aperiam, unde sint est architecto modi delectus laborum, mollitia quidem. Ut maxime perferendis necessitatibus laboriosam error quidem accusantium.</span>
          </p>
        </div>
        <Footer />
      </div>
    )
  }
}
