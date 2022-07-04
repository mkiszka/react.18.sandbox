import React from "react";
import _ from "lodash";
import "./App.css";
import WordCount from "./components/WordCount";

const data = {
  "lorem-ipsum": [
    [
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "sed lectus vestibulum mattis ullamcorper velit",
      "congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar",
      "facilisis mauris sit amet massa",
      "vitae tortor condimentum lacinia quis vel eros donec ac odio",
      "suscipit adipiscing bibendum est ultricies integer",
      "adipiscing diam donec adipiscing tristique risus nec",
      "vitae tempus quam pellentesque nec nam aliquam sem et tortor",
      "lobortis scelerisque fermentum dui faucibus in",
      "adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
      "metus vulputate eu scelerisque felis imperdiet proin fermentum",
      "consectetur a erat nam at lectus urna duis convallis convallis",
      "dictumst quisque sagittis purus sit amet volutpat consequat mauris",
      "et malesuada fames ac turpis egestas sed tempus",
      "velit dignissim sodales ut eu sem integer vitae",
      "erat nam at lectus urna",
      "sit amet porttitor eget dolor morbi non arcu risus quis"
    ],
    [
      "ac tortor vitae purus faucibus ornare suspendisse",
      "aliquam id diam maecenas ultricies mi eget mauris pharetra et",
      "sit amet massa vitae tortor",
      "sed pulvinar proin gravida hendrerit lectus",
      "elit at imperdiet dui accumsan sit amet nulla facilisi morbi",
      "vel eros donec ac odio tempor orci dapibus",
      "mattis rhoncus urna neque viverra justo nec ultrices dui",
      "mattis pellentesque id nibh tortor",
      "in dictum non consectetur a erat nam",
      "pellentesque habitant morbi tristique senectus et netus et"
    ]
  ],
  "bacon-ipsum": [
    [
      "bacon ipsum dolor amet turkey ball tip fatback ribeye",

      "pancetta boudin venison kevin burgdoggen chuck landjaeger meatloaf brisket rump pig salami",
      "tail ham hock shank spare ribs prosciutto alcatra chuck",

      "ground round tenderloin burgdoggen sausage andouille pig jerky strip steak chicken bacon porchetta",
      "filet mignon strip steak bresaola frankfurter meatball tri-tip chuck pork loin ball tip tail turducken pork",
      "filet mignon cupim tri-tip doner spare ribs shankle tongue short ribs fatback ball tip pork loin pastrami",
      "ham leberkas pork belly chuck prosciutto ball tip pastrami fatback"
    ],
    [
      "kielbasa leberkas short ribs landjaeger venison corned beef bacon meatball hamburger salami tenderloin alcatra",
      "chicken corned beef flank beef ribs",

      "fatback ribeye turkey pastrami jerky ham hock filet mignon pork loin shank frankfurter tail buffalo doner capicola pork",
      "filet mignon shoulder frankfurter leberkas bresaola landjaeger pancetta andouille pig kielbasa chicken pork belly",
      "strip steak boudin prosciutto shoulder ribeye capicola filet mignon tongue chicken buffalo andouille alcatra fatback",
      "swine filet mignon bresaola kielbasa cupim salami frankfurter bacon tail fatback flank strip steak rump pig venison",
      "sirloin pancetta spare ribs cow t-bone prosciutto drumstick rump kielbasa tongue short loin bacon pork filet mignon hamburger"
    ],
    [
      "boudin landjaeger rump short ribs",

      "andouille jowl tail porchetta venison turducken kielbasa chicken strip steak short ribs hamburger spare ribs alcatra",
      "jowl tail sausage hamburger doner pancetta prosciutto meatball turducken beef ribs pork chop",
      "picanha buffalo capicola ball tip chicken tenderloin boudin frankfurter hamburger"
    ]
  ]
};

export default class App extends React.Component {
  state = {
    articleIndex: 0
  };

  render() {

    const titles = _.chain(data)
      .map((value, key) => _.lowerCase(key))
      // .tap(console.log)
      .map(_.upperFirst)
      // .tap(console.log)
      .value();

    const paragraphs = _.chain(data)
      .map(article =>
        _.chain(article)
          .map(paragraph =>
            _.chain(paragraph)
              .map((sentence) =>
                _.chain(sentence)
                  .upperFirst()
                  .thru(value => value + ".")
                  .value()
              )
              .join(" ")
              .upperFirst()
              .value())
          .value()
      ).value();

    const words = _.chain(data)
      .map(article =>
        _.chain(article)
          .flattenDeep()
          .flatMap(sentence => _.chain(sentence).words().value())
          .value()
      )
      .value();
    const articles = _.chain(_.zip(titles, paragraphs, words))
      //.map(arr => { return {title: arr[0], paragraphs: arr[1], words: arr[2] }})
      .map(([title, paragraphs, words]) => ({ title, paragraphs, words }))
      .tap(console.log)
      .value();
    const options = _.map(titles, (value, index) => [index, value]);
    const currentArticle = articles[this.state.articleIndex];
    const currentWords = words[this.state.articleIndex];
    return (
      <>
        <Select
          onChange={articleIndex => this.setState({ articleIndex })}
          options={options}
        />        
        <h1>The article</h1>
        <Article
          title={currentArticle.title}
          paragraphs={currentArticle.paragraphs}
        />
        <h1>Statistics</h1>
        <WordCount words={currentWords}></WordCount>        
        <h1>Unique words</h1>
        <UniqueWords words={currentArticle.words} />
      </>
    );
  }
}

function Select({ options, onChange }) {
  return (
    <select onChange={event => onChange(event.target.value)}>
      {options.map(option => (
        <option key={option[0]} value={option[0]}>
          {option[1]}
        </option>
      ))}
    </select>
  );
}
function Article({ title, paragraphs }) {
  return (
    <article>
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
}
function UniqueWords({ words }) {
  const uniqueWords = _.uniq(words);
  return (
    <ul>
      {uniqueWords.map(word => (
        <li key={word}>{word}</li>
      ))}
    </ul>
  );
}
