import AsyncStorageFactory from '@react-native-community/async-storage';
import LegacyStorage from '@react-native-community/async-storage-backend-legacy';

const legacyStorage = new LegacyStorage();

export default AsyncStorageFactory.create(legacyStorage);
