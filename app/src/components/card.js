import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity
} from 'react-native'
import { Card, Icon } from 'react-native-elements'
import CommentModal from '../components/commentModal';
import styles from './Styles/card';

class _Card extends Component {
  
  state = {
    modalVisible: false,
  }

  setModalVisible = (visible) => this.setState({ modalVisible: visible });

  render(){
    const { modalVisible } = this.state;
    return(
      <Card style={styles.card}>
      <View style={styles.container}>
        <CommentModal
          id={this.props._id}
          modalVisible={modalVisible}
          setModalVisible={this.setModalVisible}
        />
        <View style={styles.titleWrap}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
      </View>
      <Image 
        source={{uri:this.props.imageUrl}}
        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.buttonsWrap}>
            <TouchableOpacity
                onPress={this.props.onLike}
                style={{ paddingRight: 15 }}
                disabled={!this.props.isLoggedIn}
              >
                {this.props.isLoggedIn ? this.props.hasLiked ? (
                  <Icon
                    color="red"
                    name='md-heart-outline'
                    type='ionicon'
                    size={22}
                  />
                ) : (
                    <Icon
                      name='md-heart-outline'
                      type='ionicon'
                      size={22} />
                  ) : (
                    <Icon
                      name='md-heart-outline'
                      type='ionicon'
                      color='gray'
                      size={22}
                    />
                  )}
              </TouchableOpacity>
            
          <TouchableOpacity
            onPress={() => this.setModalVisible(true)}
            disabled={!this.props.isLoggedIn}>
              {(this.props.isLoggedIn) ? (
                <Icon name='comments-o'
                type='font-awesome'/>
              ) : (
                <Icon name='comments-o'
                type='font-awesome'
                color='gray'/>
              )}
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            onPress={this.props.onProfile}>
            <Text style={styles.username}>
              {this.props.user.username}
            </Text>
          </TouchableOpacity>
          <Text style={styles.content}> 
            {this.props.content}
          </Text>
          <TouchableOpacity
            onPress={this.props.onDetails}
          >
            <Text style={{ color:'gray' }}>See comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
    );
  }
}

_Card.defaultProps = {
  likes: true,
}

export default _Card