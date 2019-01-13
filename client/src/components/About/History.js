import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./About.css";

class History extends Component {
  render() {
    return (
      <div>
     <Helmet>
         <title>Our History</title>
     </Helmet>
        <div className="topnav">
          <a href="/">Home</a>
          <Link to="/workers">View All</Link>
          <Link to="/login">Admin</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="bannerA">
          <div className="centered">
            <h1>WHO WE ARE</h1>
          </div>
        </div>
        <div className="about-links">
          <Link to="/history" className="history">
            Our History
          </Link>
          <Link to="/beliefs" className="beliefs">
            Our Beliefs
          </Link>
          <Link to="/mission" className="mission">
            Mission and Vision
          </Link>
          <Link to="/leaders" className="leaders">
            Our Leaders
          </Link>
        </div>
        <div className="history-page">
          <div className="container">
            <h1>OUR HISTORY</h1>
            <div className="letter1">
              <p>
                In July 1909, a son was born into the Akindayomi family of Ondo
                State of Nigeria. Even though this child grew up surrounded by
                idol worshippers, he knew there existed a greater power and
                yearned to know,
                <br />
                “The God who created the earth and everyone on it”. This pursuit
                for God led him to the Church Missionary Society where he was
                baptized in 1927. Still spiritually unfulfilled, he joined the
                Cherubim and Seraphim church in 1931.
              </p>
            </div>
            <hr />
            <p>
              Whilst there, he began to hear a voice within him saying, “You
              will be my servant.” Since this was not his intention, he decided
              to ignore the voice. This went on for seven years during which all
              the business ventures that he tried resulted into failure. In debt
              and without peace of mind, he found himself totally dependent on
              the grace of God. Here marked the beginning of a definite
              relationship with God.Totally broken, he yielded saying, “Lord, I
              will go wherever you want me to go.” He asked for signs to confirm
              that this was indeed God’s call. The confirmation came through the
              Bible passages of Jeremiah 1:4-10, Isaiah 41:10-13 and Romans
              8:29-31. The Lord assured him that He would provide for all his
              needs, as he would not receive any salary from that point on. This
              proved to be a comforting reminder during the trials in the months
              ahead. He became married in 1941. He continued to worship with the
              Cherubim and Seraphim. In 1947, he started to become concerned
              that the church was departing from the true Word of God in some of
              its practices. By 1952, he felt totally persuaded to leave the
              church. He started at Willoughby Street, Ebute-Metta, Lagos a
              housefellowship called, the Glory of God Fellowship. Initially
              there were nine members but before long the fellowship rapidly
              grew as the news of the miracles that occurred in their midst
              spread.
            </p>
            <hr />
            <div className="letter1">
              <p>
                Pa Akindayomi also had a vision of words that appeared to be
                written on a blackboard. The words were “The Redeemed Christian
                Church of God.” Amazingly, Pa Akindayomi who could not read or
                write was supernaturally able to write these words down. In this
                visitation, God also said to him that this church would go to
                the ends of the earth and that when the Lord Jesus Christ
                appeared in glory, He would meet the church. The Lord then
                established a covenant with Pa Akindayomi, synonymous to the
                Abrahamic covenant in the Bible. He said that He the Lord would
                meet all the needs of the church in an awesome way if only
                members would serve Him faithfully and be obedient to His Word.
                It is upon this covenant that the Redeemed Christian Church of
                God was built.
              </p>
            </div>
            <hr />
            <p>
              Thus, the Redeemed Christian Church of God was born in 1952,
              destined by the Lord Himself to take the world for Him. The church
              continued to meet at 9 Willoughby Street until they were able to
              acquire some land thereby witnessing a relocation to the present
              site of the Headquarters of the church at 1-5 Redemption Way,
              Ebute-Metta, Lagos (formerly 1a, Cemetery Street).
            </p>
            <hr />
            <div className="letter1">
              <p>
                Sometime in the early 70s, God had spoken to Pa Akindayomi about
                his successor. The Lord told him that this man who was not a
                member of the church then, would be a young educated man. Thus
                when a young university lecturer joined the church in 1973, Papa
                was able to recognize him in the Spirit as the one that the Lord
                had spoken about in the past. This man, Enoch Adejare Adeboye
                who was then a lecturer of Mathematics at the University of
                Lagos soon became involved in the church. He became one of the
                interpreters translating Pa Akindayomi’s sermons from Yoruba to
                English. He was ordained a pastor of the church in 1975.
              </p>
            </div>
            <hr />
            <p>
              Papa was preparing to meet his Creator. He sent for Pastor Adeboye
              and spent several hours sharing with him details of the covenant
              and the plans of the Lord for the church. Even though a year
              before this, the Lord had revealed to Pastor Adeboye that he would
              be Papa’s successor, it was still too difficult for him to fully
              contemplate such an awesome responsibility.
              <br />
              Pa Josiah Akindayomi was 71 years old when he died. Amidst
              controversy, Pastor Adeboye’s appointment was formalized by the
              reading of Pa Akindayomi’s sealed pronouncement after his burial.
            </p>
            <hr />
            <p>
              Since 1981, an open explosion began with the number of parishes
              growing in leaps and bounds. At the last count, there are at least
              about 2000 parishes of the Redeemed Christian Church of God in
              Nigeria. On the International scene, the church is present in
              other African nations including C’ote D’Ivoire, Ghana, Zambia,
              Malawi, Zaire, Tanzania, Kenya, Uganda, Gambia, Cameroon, and
              South Africa. In Europe the church is spread in England, Germany,
              and France. In the United States there are parishes in Dallas,
              Tallahassee, Houston, New York, Washington, and Chicago and also
              in the Caribbean states of Haiti and Jamaica.
            </p>
            <hr />
            <div className="letter1">
              <p>
                Today, God is still doing marvelous deeds through the Redeemed
                Christian Church of God, worldwide. One of the well-known
                programs of the church is the Holy Ghost Service, an all night
                miracle service that holds on the first Friday of every month at
                the Redemption Camp at Km. 46, Lagos-Ibadan expressway. The
                average headcount of those who attend the Service is about
                500,000. The Holy Ghost Service now holds in different parts of
                the world which includes the United Kingdom, India, USA, Canada,
                South Africa, Australia, Dubai, Ghana, Philippines and many
                more.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <img
            src={require("../images/rccglogo.gif")}
            alt="logo"
            style={{ height: "100px", width: "100px" }}
          />
          <p>
            Jesus Christ the same yesterday, and today, and for ever. Hebrews
            13: 8
          </p>
        </div>
        <footer class="footer">
          <div class="container">
            <ul class="social-icon animate pull-right">
              <li>
                <p className="copy">
                  Copyright © All Rights Reserved 2020 | Design & Development by
                  Bryan
                </p>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/ibukys.ogar"
                  title="facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" title="twitter" target="_blank">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="google plus" target="_blank">
                  <i class="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
export default History;
