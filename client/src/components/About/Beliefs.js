import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Beliefs extends Component {
  render() {
    return (
      <div>
          <Helmet>
              <title>Our Beliefs</title>
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
          <Link to="" className="beliefs">
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
            <div className="begin">
              <h1>OUR HISTORY</h1>
              <div className="header-1">
                <h2>THE BIBLE TEACHING</h2>
                <p>
                  We believe that the entire Scripture, both Old and New
                  Testament are written by the inspiration of the Holy Spirit –
                  II Tim. 3:16-17. All the Christian teachings and the Christian
                  attitude of the Children of God are such as are established in
                  the Holy Bible – II Tim. 3:10-15; II Peter 1:21; John 17:17;
                  Ps. 119:105. We believe that the Bible is the written and
                  revealed Will of God. Man’s position to God, the way to obtain
                  salvation, woe and destruction awaiting sinners that refuse to
                  repent and everlasting joy that is kept for the born again
                  souls. All the Bible teachings are holy, what the Bible
                  reveals as the will of God are such that we should accept, and
                  whatever God writes in the Bible and His Law are to remain
                  unchangeable; for the Heavens and Earth may pass away but the
                  Word of God stands forever. Deut. 4:22; Rev. 22:18, 19; Matt.
                  24:34-38.
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT GOD</h2>
                <p>
                  As revealed unto us by the Bible, we believe that there is
                  only one God, Who is the Creator of both visible and invisible
                  creatures -Gen. 1:1; Ps. 86:9-10; Is. 43:10-11; John 1:1-3.
                  Only God will be in existence forever. Ez. 3:14; in God every
                  creature receives life -John 5:26.
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT JESUS CHRIST</h2>
                <p>
                  We believe that He is the Son of God; Who took away our sins,
                  and the Savior of the world. We also believe that Jesus is God
                  and was born by Mary the Virgin. He is God revealed in the
                  flesh. Through Him all things were created. John 1:1-14; John
                  14:9; Matt. 1:18-25, Is 9:6; Is 53:5-6. We believe in His
                  death on the Cross, and resurrection, by which He brought
                  redemption – Is. 53:4-10; I Pet. 2:24; John 10:11; Gal. 3:13,
                  Matt. 20:28; I Cor. 15:3; Rom. 4:25; II Cor. 5:14; Heb 2:9;
                  Heb 9:26.
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT HOLY SPIRIT</h2>
                <p>
                  The Holy Spirit is the third Person in the TRINITY. He has the
                  same power, the same glory with God the Father and God the Son
                  – John 14:16-17; John 15:26; Matt. 3:16; Acts 13:24. He is one
                  with Father and the Son who is to be worshiped and served.
                  Three Persons that become one are the source of blessings to
                  all the living creatures in Heaven and on earth – Matt. 28:19;
                  II Cor. 13:14; I John 1:5-7. The Holy Spirit has a great work
                  to perform. He Teaches, He Speaks to men, and bears witness in
                  us – Acts 16:6-7; He performs the work of regeneration for
                  man- John 3:5-6; He also performs the work of Sanctification
                  in the born again souls until they are fully sanctified – John
                  16:8; Eph 1:17-19; II Thess. 2:13; I Cor. 6:11. This same Holy
                  Spirit endows believers with gifts they can use – I Cor 12:7;
                  He empowers one in the Lord. Acts 1:8.
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT TRINITY</h2>
                <p>
                  The egg is comprised of three parts: The yellow yolk, the
                  whitish part, and the shell. Despite these three (3)
                  substances, the egg is not three but one. Likewise, we believe
                  that God the Father, God the Son, and God the Holy Ghost are
                  one God, but made of three persons – hence they are ONE IN
                  TRINITY – Gen. 1:16-29; Matt. 3:16-17; Matt. 18:19.
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT THE DEVIL</h2>
                <p>
                  We believe that there is a devil, who seeks the down fall of
                  every man. He brought sickness, sin and death into the world.
                  Gen. 3:1-16. He seeks the destruction of those who exercise
                  their faith in the Lord Jesus. Matt. 4:1-11; James 4:7; I
                  Peter 5:8. The devil has several unclean spirits over whom he
                  governs – Matt. 12:24. A time would soon come when he shall be
                  thrown into the pit and chained for one thousand years- Rev.
                  20:7-9. After this, he will be put into the lake of fire where
                  he will remain suffering together with his followers for ever
                  and ever. Rev. 20:10
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT MAN</h2>
                <p>
                  Things He created. Gen. 1:26. God formed man of the dust of
                  the ground and breathed into his nostrils the breath of life,
                  and man became a living soul – Gen 2:7. Therefore man is of
                  three parts, namely body, soul and spirit. Man is God’s
                  ambassador on earth to take control over all other creatures
                  on His behalf on earth. Gen. 1:26-28. God allows man to take
                  part in His work and thereby reveal His love for mankind more
                  than any other creatures – Gen. 2:15. This also shows how God
                  elevates man more than the other creatures upon the earth.
                </p>
              </div>
              <div className="header-1">
                <h2>REPENTANCE UNTO GOD</h2>
                <p>
                  Repentance is the sorrow of a godly man for his sins with
                  decision to abstain from them – Acts 3:19; 20:21; II Cor.
                  7:10; Mark 1:15; Is. 55:7; II Chron. 7:14; Ezek. 18:21.
                </p>
              </div>
              <div className="header-1">
                <h2>JUSTIFICATION OR NEW BIRTH</h2>
                <p>
                  This is God’s grace whereby we are cleansed from our sins by
                  which we are able to stand before God as though we have never
                  sinned. Acts 13:39; Rom. 3:25-26; Rom 5:1; I Cor. 6:11; Gal.
                  3:24; John 1:12-13; 3:3; II Cor. 5:9; Titus 3:5; I Peter 1:23;
                  Acts 10:43; John 3:3,5.
                </p>
              </div>
              <div className="header-1">
                <h2>SANTIFICATION (HOLINESS)</h2>
                <p>
                  Sanctification is another grace of God by which our souls are
                  progressively and completely cleansed. This is the second
                  accomplishment of the grace which through our faith in the
                  Blood of Jesus Christ is wrought after we have been justified
                  and free from our sins or regenerated – John 17:15-17; I
                  Thess. 4:3; Heb. 2:11; 12:14; 13:12; I John 1:7; Luke 1:74,
                  75; II Cor. 7:1; I Peter 1:16; Eph. 5:25-27; I Thess. 5:23-24;
                  II Thess. 2:13.
                </p>
              </div>
              <div className="header-1">
                <h2>WATER BAPTISM</h2>
                <p>
                  We believe in baptism by the Name of the Father, Son and Holy
                  Ghost – Matt. 28:19. The teaching is revealed in the New
                  Testament and all Christians must obey this rule of the Lord –
                  Acts 2:24; Acts 16:15; Acts 18:8; Acts 19:4-5. Every saved
                  soul automatically qualifies for Water Baptism – Acts 8:29-39;
                  16:18-23.
                </p>
              </div>
              <div className="header-1">
                <h2>BAPTISM OF THE HOLY SPIRIT</h2>
                <p>
                  All born-again souls should ask for the Holy Spirit from
                  above, as the Apostles were ordered to wait in Jerusalem until
                  they were filled from above. It is the promise of the Father.
                  It is God’s gift which He gives to those who obey Him – Luke
                  24:49; John 4:14-26; Acts 1:4-5; Acts 5:32; Acts 8:14-17. It
                  is God’s promise unto those who are far and all whom the Lord
                  shall call – Acts 2:38-39. Any Christian who receives the
                  baptism of the Holy Spirit must speak in tongues – Acts 2:4;
                  Acts 10:34-36; Acts 19:2-6.
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT PRAYER</h2>
                <p>
                  A Christian without condemnation of heart has a right to thank
                  God and be in adoration and in prayer unto the Lord always –
                  Zek. 12:10. His soul thirsts for God – Ps. 42:2. The Holy
                  Spirit helps his infirmities in prayer – Rom. 8:26. We must
                  pray only by the Name of JESUS – John 16:23; ; I Tim. 2:25.
                  Without faith our prayer shall be powerless before God – James
                  1:6-8; Heb. 11:6. Those who are unable to pray annoy God – Is.
                  42:22; Is. 64:6-7. Much trouble and danger are encountered in
                  the absence of prayer – Zeph 1:4; Dan 9:13-14; Hosea 8:13-14.
                  We are commanded to pray and not to faint and to pray without
                  ceasing – Col. 4:2; I Thess. 5:17; I Cor. 7:5; Luke 18:1. The
                  Apostles put prayer first in their life and they spent much
                  time in prayer – Acts 6:4; Rom. 6:4; Rom 1:9; Col. 1:9. It is
                  God’s plan and order that we should pray to receive all the
                  goods He has promised in His treasure for us – James 4:2; Dan.
                  9:3; Matt. 7:7-11; Matt. 9:24-29; Luke 11:13.
                </p>
              </div>
              <div className="header-1">
                <h2>ABOUT RESTITUTION</h2>
                <p>
                  Restitution is a sign of true repentance. This is payment for
                  what is damaged – Ez.. 22:3. Whatever cannot give us a clear
                  conscience before man and God should be restituted without
                  delay – Lev. 6:1-7; Luke 19:8; Prov. 28:13; Acts 24:16.
                  Healing without medicine is Biblical – Matt. 4:23; Ps. 103:3;
                  Sickness is caused because of the fall of man. The force
                  behind this is Satan – Job 2:1-9; Luke 13:15; Acts 10:3
                </p>
              </div>
              <div className="header-1">
                <h2>DIVINE HEALING (WITHOUT MEDICINE)</h2>
                <p>
                  Healing without medicine is Biblical – Matt. 4:23; Ps. 103:3;
                  Sickness is caused because of the fall of man. The force
                  behind this is Satan – Job 2:1-9; Luke 13:15; Acts 10:3. But
                  JESUS came to destroy the works of the devil – I John 3:8.
                  Christ purchased our soul from the curse of sin. He bore our
                  infirmities and carried our sorrow – Matt. 8:15-17. By His
                  stripes we are healed. Is 53:4-5; Gal. 3:13; I Peter 2:24.
                  Healing without medicine is of the Gospel – Matt. 9:35; Mark
                  6:10-18. We read that the twelve Apostles and the seventy
                  disciples combined healing with their Ministry of the Gospel –
                  Luke 9:1-2; Luke 10:1-9. The Lord commanded us to go into the
                  world, just to teach the nations alone, but that we should
                  also heal the sick – Matt. 28:19-20; Mark 10:1, Mark 16:15-18.
                  <br />
                  We could obtain our healing in these four ways: 1. By
                  individual prayer – John 14:13-14 2. By two people (or a group
                  of people) who have agreed to pray by faith – Matt. 18:19-20.
                  3. By the laying of hands on the head – Mark 16:18; Acts 9:18;
                  Acts 28:8. 4. By the Ministry of the Elders, anointing the
                  sick with prayer of faith – James 5:14-15 Special Notice –
                  Before we can work by healing without medicine, we would have
                  sanctified our life to the doing of the Law – Rom. 6:13, 19;
                  Rom. 12:1; Matt. 16:24; II Cor. 8:5, 15. Many miracles were
                  performed by the Apostles – Acts 9:33-42; Acts 19:11-12; Acts
                  28:8-9.
                </p>
              </div>
              <div className="header-1">
                <h2>PROPHECY IN THE CHURCH</h2>
                <p>
                  The Bible teaches us to abstain from all appearance of evil –
                  I Thess. 5:22. “But follow after righteousness, faith, love,
                  purging ourselves from unclean things so that we may be
                  vessels unto honor, sanctified, and prepared unto every good
                  work” – II Tim. 2:21-22. Therefore we must not see our Church
                  members in dancing halls, or cinema halls, reveling, for such
                  things are works of the flesh. All people doing such things
                  shall not inherit the kingdom of God – Gal 5:19-21; I Peter
                  4:3-4; Prov 31:4-5; Rev. 1:5-6; Gen 19:30-38.
                  <br />
                  Swearing and Cursing Forbidden All Christians should not swear
                  or curse or blaspheme for we were not taught of Jesus in such
                  a way. “Bless, and curse not” Rom. 12:14. Swear not at all,
                  neither by Heaven, nor by the earth or any other swearing. But
                  let your yes by yes, and No be No so that you do not run into
                  condemnation – Matt. 5:34; James 5:12.
                </p>
              </div>
              <div className="header-1">
                <h2>THE CHURCH OF GOD</h2>
                <p>
                  The born-again souls are called the Church of God – Eph. 1:22;
                  Col. 1:1-18; Eph 3:10; 5:24-29. The assembly of the believers,
                  the sanctified souls in Christ Jesus, Those who we call the
                  Holy people of God – I Cor. 1:2; Acts 14:23; Phil. 4:15; Acts
                  13:28. Therefore all that God has called to gather together in
                  a place and fed with the Word of God – Acts 2:41-47; They
                  accept Christ as the head of the Church. They gather from time
                  to time to worship God in truth and Spirit to share the bread
                  and eat. Their major assignment is to spread the Gospel of
                  Christ to all Nations – Matt. 28:19.
                </p>
              </div>
              <div className="header-1">
                <h2>RESURRECTION</h2>
                <p>
                  We experience daily the resurrection of the Spirit, all the
                  born-again souls who are passed from death to life – Eph.
                  6:14; Rom 6:11; John 5:20. As this body is dissolved,
                  immediately we are entering into our Heavenly Home or house
                  not made with hands eternal in the Heavens – I Cor. 5:1-8
                  There is resurrection of the Body. Jesus taught us plainly
                  that the buried body will be raised up from the tomb at the
                  last day Job 5:28-29. Paul also explained this to us – Acts
                  24:15; I Cor. 15:22, 42-44; Phil. 3:21; Dan. 12:2. Only Holy
                  people will be at the resurrection those who belong to Jesus
                  when He appears; but the sinners shall resurrect in hell, a
                  place where people whose names are not found in the Lamb’s
                  Book – Rev. 20:4-5; John 5:28-29; Rev. 20:12-15.
                </p>
              </div>
              <div className="header-1">
                <h2>THE SECOND COMING OF CHRIST</h2>
                <p>
                  The Second coming of Jesus Christ will be in physical form and
                  will be visible to all in like manner as He was seen ascending
                  up to heavens – Acts 1:9-11; John 14:3. His return will be in
                  two stages: A. Christ’s return in the sky – The Saints or
                  Bride of Christ will be raptured to meet Christ in the sky – I
                  Thess. 4:15-17; I Cor. 15:51-52; Matt. 24:40-44; Matt 25:10 B.
                  His return to the earth – He will return to the earth to judge
                  the sinners and the ungodly – Rev. 19:19-21; II Thess. 1:7-10;
                  Jude 1:14-15; Zech. 14:3-4.
                </p>
              </div>
              <div className="header-1">
                <h2>THE COMING JUDGEMENTS</h2>
                <p>
                  We believe that there will be three special judgements. i) The
                  Judgement of the Believers: This would start immediately
                  believers are caught up in the sky, they shall stand before
                  Christ. After this judgment they will descend down with Christ
                  upon the earth – II Cor. 5:10; I Cor. 3:3; 11-15; James 1:12;
                  Rom 2:16. ii) The Judgement of the Nation: This will be the
                  time when Jesus appears upon earth between the millennial
                  reign and final judgement. Acts 17:31; Joel 3:2; Ez. 14:15;
                  Jud. 1:14-15; II Thess 1:7-10; Rom 2:16; Rev. 1:7; Mal. 16:21.
                  iii) The Judgement of the Unbelievers: or the White Throne
                  Judgement : This will happen after Christ’s one thousand years
                  reign at the White Throne. – Rev. 20:11-15; II Peter 3:7; Dan.
                  12:2.
                </p>
              </div>
              <div className="header-1">
                <h2>NEW HEAVEN AND NEW EARTH</h2>
                <p>
                  The Word of God teaches us that after judgement, this wicked
                  world will be removed. God will create a new Heaven and a new
                  earth in which HOLINESS will exist – Matt. 24:35; II Peter
                  3:12-13; Rev. 21:1-3; Is. 65:17:; 66:22
                </p>
              </div>
              <div className="header-1">
                <h2>ETERNAL LIFE AND ETERNAL PUNISHMENT</h2>
                <p>
                  The Bible teaches us that there is eternal punishment as well
                  as eternal life – Matt. 25:46. The wicked people will be sent
                  to a fiery hell made of sulphur, to be tormented both day and
                  night. The punishment will continue forever and ever – Rev.
                  14:10-11; Luke. 16:24; Mark 9:43-44.
                </p>
              </div>
              <div className="header-1">
                <h2>DEDICATION OF CHILDREN</h2>
                <p>
                  We believe that after a child is born on the 8th day, the
                  parent should bring himher unto the House of the Lord for
                  dedication unto the Lord – 1 Sam. 1:22; Luke. 22:22-24; Matt.
                  19:13-15.
                </p>
              </div>
              <div className="header-1">
                <h2>THE LORD'S DAY</h2>
                <p>
                  We believe that the first day of the week called Sunday is a
                  special day which the believers should separate as the Lord’s
                  day during which time are to gather to worship – Acts 20:7;
                  1Cor. 16:2; Rev. 1:10. The Lord resurrected on the first day
                  of the week – Mark 16:9; Ezek. 31:12-14.
                </p>
              </div>
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

export default Beliefs;
