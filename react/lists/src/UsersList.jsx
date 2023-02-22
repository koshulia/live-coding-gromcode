import React from 'react';
import Pagination from './Pagination';
import User from './User';

// state
// currentPage: number

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const itemsPerPage = 3;
    const { currentPage } = this.state;
    const { users } = this.props;

    const indexFrom = itemsPerPage * currentPage - itemsPerPage;
    const indexTo = itemsPerPage * currentPage;

    const usersToRender = users.slice(indexFrom, indexTo);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
