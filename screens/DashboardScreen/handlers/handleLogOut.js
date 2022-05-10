import * as Speech from 'expo-speech';
import {resetArticles, resetPageNumber} from '../../../redux/slices/articlesSlice'
import { updateAccessToken } from '../../../redux/slices/authenticationSlice';

export const handleLogOut = (navigation,dispatch) => {        
    dispatch(updateAccessToken("")); // reset access token in redux store
    dispatch(resetPageNumber()); // reset page number
    dispatch(resetArticles()); // reset articles in store
    Speech.stop();  // stop speech if in play
    navigation.navigate("LoginScreen"); // navigate to Login Screen
};

export default handleLogOut;