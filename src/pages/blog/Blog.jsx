import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogLayout } from "../../layouts/BlogLayout";
import { BlogItem } from "../../components/blogs/BlogItem";
import blogImage1 from "../../assets/img/blog/blogsidebar/01.jpg";
import blogImage2 from "../../assets/img/blog/blogsidebar/02.jpg";
import blogImage3 from "../../assets/img/blog/blogsidebar/03.jpg";
import blogImage4 from "../../assets/img/blog/blogsidebar/04.jpg";
import blogImage5 from "../../assets/img/blog/blogsidebar/05.jpg";
import userImage1 from "../../assets/img/blog/blogsidebar/06.jpg";
import userImage2 from "../../assets/img/blog/blogsidebar/07.jpg";
import userImage3 from "../../assets/img/blog/blogsidebar/08.jpg";
import userImage4 from "../../assets/img/blog/blogsidebar/09.jpg";
import userImage5 from "../../assets/img/blog/blogsidebar/10.jpg";

export const Blog = () => {
  const blogs = [
    {
      src: blogImage1,
      tag: "About",
      href: "/blog-details",
      title: "About TIC",
      description: [
        "The Tamil speaking community in Sri Lanka has suffered injustice and oppression for a long time and finds it extremely difficult to seek redress in the face of continuing persecution and spurious propaganda and disinformation. Since 1983, the Tamil Information Centre (TIC) has endeavoured to address the challenges that face the Tamil speaking community in Sri Lanka, to ensure that their rights are protected and promoted and their freedoms are recognised and respected.",
      ],
      userImage: userImage1,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage2,
      tag: "Business",
      href: "/blog-details",
      title: "The guiding principle of the Tamil Information Centre",
      description: [
        "Fundamental human rights are the foundation of human existence and co-existence. Human Rights make us human and they are the principles based on which we create the sacred home for human dignity.",
      ],
      userImage: userImage2,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage3,
      tag: "Consultancy",
      href: "/blog-details",
      title: "TIC at a glance",
      description: [
        "The Tamil Information Centre (TIC) is committed to human rights and community development. Over the years, the TIC has become a prominent resource centre for the promotion of human rights, and acts as a focal point for information on aspects of life relating to the Tamil-speaking people of Sri Lanka. The TIC is an organisation for people with interest in human rights, humanitarian assistance and political, social and cultural development of the Tamil-speaking people of Sri Lanka. The TIC does not implement relief or development projects, but provides services and support to organisations and groups involved in relief, rehabilitation and development.",
      ],
      userImage: userImage3,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage4,
      tag: "Investment",
      href: "/blog-details",
      title: "Structure",
      description: [
        "The TIC is based in London and operates under the direction of a volunteer Board, a minimum staff and volunteers. TIC draws on a pool of skilled volunteers, programme partners and associates and consultants to apply a wide range of expertise in addressing human rights, community development and peace issues.",
      ],
      userImage: userImage4,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title: "Communication, Cooperation and Network",
      description: [
        "A primary function of the TIC is to provide a forum for the exchange of views and information. The TIC has fostered links with governmental, non-governmental organisations and intergovernmental agencies and individuals world-wide. These links form the TIC's information infrastructure and facilitate information exchange. The process often leads to seminars, workshops, conferences, campaigns and joint activities with other organisations and groups in the promotion of human rights, peace and development.",
      ],
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title: "Resource Centre",
      description: [
        "The TIC maintains a documentation unit which aims to provide a comprehensive information resource devoted entirely to issues relating to the Tamil-speaking people of Sri Lanka. The TIC receives information and documentation from its own sources. The unique collection of nearly 25,000 items provides the support for research and has become a major resource for researchers, campaigners, practitioners and the media.",
        "The TIC also assists journalists, representatives of NGOs, students and researchers in their visits to the war zones and other areas in Sri Lanka to monitor developments and to obtain first hand information.",
        "The TIC assists organisations with limited resources in conducting seminars, meetings and workshops providing the support, facilities and services that they require. The TIC helps community and voluntary groups by providing, where necessary, meeting room facilities, administrative services, information and documentation resources, desk research support and generally helps community organisations in their activities that benefit the community.",
      ],
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title: "Information, Research and Advocacy",
      description: [
        "A broad range of information, both specialist and general is provided by the TIC. The TIC believes that both research and political action are necessary to effect changes in the policies of the Sri Lankan government and other governments that are directly or indirectly involved in the conflict in Sri Lanka. TIC publications range from briefing papers to reports and books on specific subjects dealing with issues concerning the Tamil speaking people of Sri Lanka.",
      ],
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title: "Current Awareness Service",
      description: [
        "The TIC receives queries from NGOs, journalists, researchers, students, refugee agencies, government agencies, Tamil groups, film makers, radio programmers, social workers, human rights activists, religious organisations, pressure groups, borough councils, cultural workers, solicitors and women's organisations on wide ranging subjects including history, refugees and asylum seekers, militarisation, human rights violations, culture, education, employment training, relief, rehabilitation and development, war, political parties and organisations, peace organisations and peace initiatives and national and international NGOs. The enquiries are dealt by the Documentalist and researchers with subject knowledge and experience. TIC's current awareness service has often proved cost effective to the users, saving time and money they might otherwise spend in research.",
      ],
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title: "Liaison with Organisations",
      description: [
        "The TIC liaises with a wide variety of organisations to raise consciousness, promote dialogue, understanding and more effective cooperation in the realisation of human rights and to bring about a just solution to the Sri Lankan national conflict which promotes development, security and human rights for all peoples in Sri Lanka. These range from grass roots organisations struggling to find solutions to particular social problems and organisations and resistance movements involved in the welfare, promotion and protection of human rights at the local level to international organisations involved in promoting peace, human rights, refugee protection, relief, rehabilitation and development. The TIC promotes cooperative involvement in community affairs by organisations involved in Sri Lanka.",
      ],
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title: "Community Development and Training",
      description: [
        "The community development programme of the TIC involves women, elders, refugees and social, cultural and human rights workers and is devoted to ensuring greatest possible impact on the community on all aspects of life.",
        "The TIC conducts studies on various issues relating to community development. It conducts seminars and workshops involving social, cultural and human rights workers in the community for education and improvement of skills. Informal, but structured consultation meetings with opinion makers and decision makers have become the focal point for information exchange and strategy planning. These meetings also help to develop constructive relationships among participants and promote networking.",
        "The book launches organised by the TIC helps the poor and disadvantaged writers in the community to publish their works, motivate others to write and publish their works, promotes social networking for writers and identifies markets.",
      ],
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
    {
      src: blogImage5,
      tag: "Insurance",
      href: "/blog-details",
      title: "Peace Building",
      description: [
        "The TIC continues to prioritise peace building as an important area of work, retaining emphasis on solidarity with human rights and justice groups throughout the world. The knowledge and experience of the TIC in this field have now been transformed into common guidelines for the promotion of peace and advocacy work and placed at the disposal of organisations involved in peace work, aimed at strengthening cooperative partnership.",
      ],
      userImage: userImage5,
      userName: "Miranda H.",
      date: "November 21, 2024",
      likes: 22,
      shares: 8,
    },
  ];

  return (
    <Layout breadcrumbTitle={"News Insights"} breadcrumbSubtitle={"Blog"}>
      <BlogLayout>
        {/* blogs */}
        <div className="td-postbox-wrapper td-postbox-wrapper-space">
          {blogs.map((blog, index) => (
            <BlogItem key={index} {...blog} />
          ))}
        </div>

        {/* pagination */}
        {/* <div className="td-pagenation text-center">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-regular fa-arrow-left-long"></i>
                </a>
              </li>
              <li>
                <a className="active" href="#">
                  01
                </a>
              </li>
              <li>
                <a href="#">02</a>
              </li>
              <li>
                <a href="#">- -</a>
              </li>
              <li>
                <a href="#">05</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
      </BlogLayout>
    </Layout>
  );
};
