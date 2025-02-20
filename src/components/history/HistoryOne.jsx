import React, { useEffect } from "react";
import $ from "jquery";

export const HistoryOne = () => {
  const historyItems = [
    {
      id: "1",
      year: "1983",
      title: "Journey Was Started",
      content:
        "The Tamil speaking community in Sri Lanka has suffered injustice and oppression for a long time and finds it extremely difficult to seek redress in the face of continuing persecution and spurious propaganda and disinformation. Since 1983, the Tamil Information Centre (TIC) has endeavoured to address the challenges that face the Tamil speaking community in Sri Lanka, to ensure that their rights are protected and promoted and their freedoms are recognised and respected.",
    },
    {
      id: "2",
      year: "TIC",
      title: "TIC at a glance",
      content:
        "The Tamil Information Centre (TIC) is committed to human rights and community development. Over the years, the TIC has become a prominent resource centre for the promotion of human rights, and acts as a focal point for information on aspects of life relating to the Tamil-speaking people of Sri Lanka. The TIC is an organisation for people with interest in human rights, humanitarian assistance and political, social and cultural development of the Tamil-speaking people of Sri Lanka. The TIC does not implement relief or development projects, but provides services and support to organisations and groups involved in relief, rehabilitation and development.",
    },
    {
      id: "3",
      year: "Structure",
      title: " ",
      content:
        "The TIC is based in London and operates under the direction of a volunteer Board, a minimum staff and volunteers. TIC draws on a pool of skilled volunteers, programme partners and associates and consultants to apply a wide range of expertise in addressing human rights, community development and peace issues.",
    },
    {
      id: "4",
      year: "CCN",
      title: "Communication, Cooperation and Network",
      content:
        "A primary function of the TIC is to provide a forum for the exchange of views and information. The TIC has fostered links with governmental, non-governmental organisations and intergovernmental agencies and individuals world-wide. These links form the TIC's information infrastructure and facilitate information exchange. The process often leads to seminars, workshops, conferences, campaigns and joint activities with other organisations and groups in the promotion of human rights, peace and development.",
    },
    {
      id: "5",
      year: "Resource Centre",
      title: "",
      content:
        "The TIC maintains a documentation unit which aims to provide a comprehensive information resource devoted entirely to issues relating to the Tamil-speaking people of Sri Lanka. The TIC receives information and documentation from its own sources. The unique collection of nearly 25,000 items provides the support for research and has become a major resource for researchers, campaigners, practitioners and the media. \n The TIC also assists journalists, representatives of NGOs, students and researchers in their visits to the war zones and other areas in Sri Lanka to monitor developments and to obtain first hand information. \n \n The TIC assists organisations with limited resources in conducting seminars, meetings and workshops providing the support, facilities and services that they require. The TIC helps community and voluntary groups by providing, where necessary, meeting room facilities, administrative services, information and documentation resources, desk research support and generally helps community organisations in their activities that benefit the community.",
    },
    {
      id: "6",
      year: "Information, Research and Advocacy",
      title: "",
      content:
        "The TIC has published a number of reports, newsletters, briefing papers, and books on human rights, humanitarian assistance and political, social and cultural development of the Tamil-speaking people of Sri Lanka. The TIC has also published a number of reports on the human rights situation in Sri Lanka and has produced a number of publications on the Tamil-speaking people of Sri Lanka. The TIC has also published a number of reports on the human rights situation in Sri Lanka and has produced a number of publications on the Tamil-speaking people of Sri Lanka.",
    },
  ];

  useEffect(() => {
    $("#section-time").onePageNav({
      currentClass: "current",
      scrollSpeed: 950,
    });
  }, []);

  return (
    <div className="td-history-area pb-60 pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="td-history-title-wrap mb-80">
              <span className="td-section-title-pre mb-10">
                Started From 1983
              </span>
              <h2 className="td-section-title">Tamil Information Center</h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="td-history-wrapper p-relative">
              <div className="td-history-navebar d-none d-sm-block">
                <ul id="section-time">
                  {historyItems.map((item, index) => (
                    <li key={index} className={index == 0 ? "current" : ""}>
                      <span></span>
                      <a href={`#${item.id}`} title="">
                        {`0${item.id}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {historyItems.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="td-history-item mb-80"
                >
                  <h2 className="td-history-year mb-35">{item.year}</h2>
                  <h4 className="td-history-title mb-20">{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
