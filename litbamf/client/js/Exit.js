require('../sass/exit.scss');

class Exit extends Reflux.Component {
  render () {
    return (
      <div>
        Shutdown was successful, you may now close this window
      </div>
    );
  }
}

export default Exit;