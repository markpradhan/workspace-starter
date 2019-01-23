// Libs
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import { test } from 'workspace-starter-example/reducer/test'

// ----------------------------------------------------------------------------

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => bindActionCreators({ test }, dispatch)

const TestComponent: React.SFC<any> = ({ test, state }) => (
  <div onClick={test}>{JSON.stringify(state)}</div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestComponent)
