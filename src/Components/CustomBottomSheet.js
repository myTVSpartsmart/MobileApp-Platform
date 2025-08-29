import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({isVisible, onClose, children}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 6,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
  },
  modalWrapper: {
    marginHorizontal: 6,
    marginBottom: 8,
  },
});

export default CustomModal;

// update Bottom Sheet
// CustomModal isVisible={isModalVisible} onClose={handleCloseModal}>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text style={styles.settingStyle}>
//             Update your application to the{'\n'}latest version
//           </Text>
//           <TouchableOpacity onPress={handleCloseModal}>
//             <SvgUri
//               source={Close_Image}
//               style={{height: 24, width: 24, marginTop: 5}}
//               // onPress={handleCloseModal}
//             />
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Text style={styles.updatecontent}>
//             A brand new version of the app is available in the Play store.
//             Please update your app to use all of our amazing features.
//           </Text>
//           <TouchableOpacity style={styles.buttonContainer}>
//             <View
//               style={{
//                 marginLeft: 10,
//                 marginRight: 12,
//               }}>
//               <Text style={styles.signintext}>Update Now</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </CustomModal>
