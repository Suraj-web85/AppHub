import React from "react";

export default function ApkComments(props) {
    console.log(props);
  return (
    <div className="ap-apcomments">
      <h3 className="sh">Comments</h3>
      <div className="ap-apcommentcon aflex">
        <div className="ap-apcomment aflex">
          <div className="ap-apcom-item">
            <div className="ap-apcomprof aflex">
              <img src={props.apk_banner} alt="Random" />
              <p className="para">{props.apk_name}</p>
              <div className="ap-report"></div>
            </div>
          </div>
          <div className="ap-apcom-item aflex">
            <p className="sspara">{props.apk_rating}</p>
            <p className="sspara">{props.timestamp}</p>
          </div>
          <p className="ap-apcom-item sspara">
            The concept is nice. No ads to annoy you . But the limitations the
            game puts on you😡. If you loose you will have to wait till you
            regain it. There are tonns of new stuff added to game but it is not
            fun at all. This game does not feel special or unique. Playing with
            the same 5 characters against unnecessarily hard levels trying to
            avoid loosing is not fun for me. The background does not change in
            like forever. The style of levels remain same. Compared to Star Wars
            1&2 this does not stack up.
          </p>
        </div>
        <div className="ap-apcomment aflex">
          <div className="ap-apcom-item">
            <div className="ap-apcomprof aflex">
              <img src={props.apk_banner} alt="Random" />
              <p className="para">{props.apk_name}</p>
              <div className="ap-report"></div>
            </div>
          </div>
          <div className="ap-apcom-item aflex">
            <p className="sspara">{props.apk_rating}</p>
            <p className="sspara">{props.timestamp}</p>
          </div>
          <p className="ap-apcom-item sspara">
            The concept is nice. No ads to annoy you . But the limitations the
            game puts on you😡. If you loose you will have to wait till you
            regain it. There are tonns of new stuff added to game but it is not
            fun at all. This game does not feel special or unique. Playing with
            the same 5 characters against unnecessarily hard levels trying to
            avoid loosing is not fun for me. The background does not change in
            like forever. The style of levels remain same. Compared to Star Wars
            1&2 this does not stack up.
          </p>
        </div>
        <div className="ap-apcomment aflex">
          <div className="ap-apcom-item">
            <div className="ap-apcomprof aflex">
              <img src={props.apk_banner} alt="Random" />
              <p className="para">{props.apk_name}</p>
              <div className="ap-report"></div>
            </div>
          </div>
          <div className="ap-apcom-item aflex">
            <p className="sspara">{props.apk_rating}</p>
            <p className="sspara">{props.timestamp}</p>
          </div>
          <p className="ap-apcom-item sspara">
            The concept is nice. No ads to annoy you . But the limitations the
            game puts on you😡. If you loose you will have to wait till you
            regain it. There are tonns of new stuff added to game but it is not
            fun at all. This game does not feel special or unique. Playing with
            the same 5 characters against unnecessarily hard levels trying to
            avoid loosing is not fun for me. The background does not change in
            like forever. The style of levels remain same. Compared to Star Wars
            1&2 this does not stack up.
          </p>
        </div>
      </div>
    </div>
  );
}
