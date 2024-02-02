const social = [
    {
        url: "tel: +8801828570328",
        target: "",
        fontAwesomeClass: "fas fa-phone-alt",
    },
    {
        url: "mailto:suzathoq@gmail.com",
        target: "",
        fontAwesomeClass: "fas fa-envelope",
    },
    {
        url: "https://www.facebook.com/suzat.hoq/",
        target: "_blank",
        fontAwesomeClass: "fab fa-facebook-f",
    },
    {
        url: "https://www.linkedin.com/in/sm-shuzatul-hoque/",
        target: "_blank",
        fontAwesomeClass: "fab fa-linkedin-in",
    },
    {
        url: "https://www.youtube.com/channel/UCdibVWpIEXKGqAknP39FyCA",
        target: "_blank",
        fontAwesomeClass: "fab fa-youtube",
    },
    {
        url: "https://www.instagram.com/suzathoq/?hl=en",
        target: "_blank",
        fontAwesomeClass: "fab fa-instagram",
    },
];

const profileLinks = [
    {
        url: "https://codeforces.com/profile/smsh16",
        target: "_blank",
        title: "Codeforces",
    },
    {
        url: "https://www.codechef.com/users/smsh",
        target: "_blank",
        title: "Codechef",
    },
    {
        url: "https://www.spoj.com/users/smsh16/",
        target: "_blank",
        title: "Spoj",
    },
    {
        url: "https://www.hackerrank.com/suzat_ice18",
        target: "_blank",
        title: "HackerRank",
    },
    {
        url: "https://www.hackerearth.com/@smshuzatul",
        target: "_blank",
        title: "HackerEarth",
    },
    {
        url: "https://toph.co/u/smsh16",
        target: "_blank",
        title: "Toph",
    },
    {
        url: "https://vjudge.net/user/smsh",
        target: "_blank",
        title: "VJudge",
    },
    {
        url: "https://atcoder.jp/users/smsh",
        target: "_blank",
        title: "Atcoder",
    },
    {
        url: "https://www.urionlinejudge.com.br/judge/en/profile/257658",
        target: "_blank",
        title: "URI",
    },
    {
        url: "https://onlinejudge.org/",
        target: "_blank",
        title: "UVa",
    },
];

function generateSocials() {
    const socialDiv = document.getElementsByClassName("social")[0];
    socialDiv.innerHTML = `
    <ul>
        ${social
            .map(
                (s) => `<li>
        <a href="${s.url}" target="${s.target}"
            ><i class="${s.fontAwesomeClass}"></i
        ></a>
    </li>`
            )
            .join("")}
    </ul>
`;
}

function generateProfileLinks() {
    const profileLinksDiv = document.getElementsByClassName("profile_links")[0];

    profileLinksDiv.innerHTML = `
    <h2>Profile Links</h2>
    <ul>
        ${profileLinks
            .map(
                (pl) => `<li>
        <a
            href="${pl.url}"
            target="${pl.target}"
            >${pl.title}</a
        >
    </li>`
            )
            .join("")}
    </ul>
    `;
}

function generateContactSection() {
    generateSocials();
    generateProfileLinks();
}
