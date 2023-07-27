import React from "react";
import "./contextElliot.css";
import NewPic from "./images/newBackimg.jpg";
import Picture2 from "./images/elliot.jpg";

const AboutElliot = (props) => {
  return (
    <div className="size">
      <img src={NewPic} />
      <div id="blur"></div>
      <div name="card">
        <img id="elliot" src={Picture2} />
        <div name="description" id="text">
          <p id="textDetails">
            Elliot Page is a famous Canadian actor, producter and activist. You
            can remember him from his best-known movies,series and TV programs
            such as Juno, Inception, Umbrella Academy, Super and X Man: Day of
            Future Past. Existence purpose of this web site is support Elliot
            Page's sexual and identical decision for live. Elliot became a
            transgender man after a surgery. Acording to him statements, all the
            process was extremly hard. He was not polite himself all the
            process. We feel you Elliot and we are here for a better world for
            every person who part of the resistance against heteronormative
            hieracy. If you want to be voice of especially Elliot and
            transgender people, you can type a support message on 'Get Touch'
            section. Also you may have more information about Elliot Page you
            can look at here.
            <p id="hello">hello</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutElliot;
