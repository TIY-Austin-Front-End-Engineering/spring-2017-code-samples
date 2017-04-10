//Examples of Creating react components

const Link = React.createClass({
  render: function () {
    return (<a target="_blank" href={this.props.dest}>
              {this.props.name}
           </a>);
  }
});

const NavBar = React.createClass({
  render: function () {
      return (<nav>
        CoolSite
        <Link dest="/blog"    name='Blog'/>
        <Link dest="/about"   name='About'/>
        <Link dest="/contact" name='Contact'/>
      </nav>);
  }
});

const Content = React.createClass({
  getInitialState: function () {
    return {
      hidden: false
    };
  },

  hideContent: function () {
    this.setState({
      hidden: !this.state.hidden
    });
  },

  render: function () {
    var pClass = 'show-content';
    if (this.state.hidden) {
      pClass = 'hide-content';
    }

    return (<article>
        <h3>Blah</h3>
        <button onClick={this.hideContent}>Toggle</button>
        <p className={pClass}>Lucas ipsum dolor sit amet skywalker moff kessel
          Skywalker bothan amidala ben ben aayla. Kashyyyk antilles darth tatooine. Darth solo watto jawa kessel antilles jabba. Leia secura ackbar bespin tatooine palpatine. Baba solo wedge bespin yoda calamari hutt greedo luke. Solo qui-gonn calrissian organa hutt mandalore jade qui-gon hutt. Binks windu lando ackbar antilles dagobah. Calamari cade mara solo leia tusken raider kessel padmé. Moff antilles ackbar droid ben hutt. Yoda kashyyyk hutt ackbar grievous moff sidious.
          Calrissian wedge windu gamorrean dagobah alderaan anakin obi-wan hutt. Yoda darth hutt palpatine fett darth darth mustafar. Organa sidious padmé binks. Amidala aayla qui-gonn antilles endor antilles watto leia sidious. Jawa yoda yavin ben hutt lando coruscant. Skywalker moff solo alderaan darth yavin moff. Yavin darth obi-wan darth windu chewbacca sidious darth. Antilles sidious darth chewbacca darth. Dooku calamari bespin ben sidious mandalore kenobi alderaan. Calamari solo solo dagobah leia moff dagobah windu.</p>
    </article>);
  }
})

const App = React.createClass({
  render: function () {
    return (<main>
        <NavBar/>
        <Content />
    </main>);
  }
});

ReactDOM.render(<App />, document.querySelector('#app'))
