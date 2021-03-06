import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LinkedIn from '../../static/social/linkedin-about-us.png';
import stylesheet from './team-members.scss';

class TeamMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTeamMember: null
    }
    this.setActiveTeamMember = this.setActiveTeamMember.bind(this)
  }
  setActiveTeamMember(activeTeamMember) {
    this.setState({ activeTeamMember })
  }
  render() {
    const { activeTeamMember } = this.state;
    const { likedin } = this.props;
    return (
      <section className="Team">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="Team__container">
          {this.props.team.map((member, index) => (
            <article
              key={member.name}
              onClick={() => this.setActiveTeamMember(member.name)}
              className={
                classNames({
                  "Team__members-card": true,
                  "Team__members-card--is-active": member.name === activeTeamMember,
                  "Team__members-card--is-visible-mobile": (index + 1) % 3 === 0
                })
              }
            >
              <div className="Team__members-icon">
                <img src={member.imageSrc} alt={member.imageAlt}/>
              </div>
              <h2 className="Team__members-name">{member.name}</h2>
              <div className="Team__members-intro">
                <p>{member.job}</p>
              </div>
              <div className="Team__members-bio">
                <p>{member.bio}</p>
              </div>
              {
              likedin &&
              <ul className="Team__members-links">
                <li>
                  <a href={member.linkedin} rel="noopener noreferrer" target="_blank">
                    <img src={LinkedIn}></img>
                  </a>
                </li>
              </ul>
              }
            </article>
          ))}
        </div>
      </section>
    )
  }
}

TeamMembers.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      linkedin: PropTypes.string
    })
  )
}

TeamMembers.defaultProps = []

export default TeamMembers
