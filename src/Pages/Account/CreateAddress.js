import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import MyGoogleMap from '../../Components/MyGoogleMap';
// import {useRoute} from '@react-navigation/native';
import axiosErrorHandler from './../../utils/axiosErrorHandler';
import { formAddress } from '../../utils/formAddress';

const titles = {
    select: 'select_address',
    manage: 'saved_addresses',
  };
  
  const listTitles = {
    select: 'pick_address',
    manage: 'saved_addresses',
  };
  
  type ParamList = {
    CreateAddress?: {
      from: string; 
      mode: 'select' | 'manage';
      updated?: boolean;
    };
  };

function CreateAddress() {
    let navigation = useNavigate();
    // const route = useRoute();
    // <RouteProp<ParamList, 'CreateAddress'>>

    const [fetchingAddresses, setFetchingAddresses] = useState(false);
    const [addresses, setAddresses] = useState([]);

    // const mode = route?.params?.mode;

    // useEffect(() => {
    //     fetchAddresses();
    //   }, []);
    
    //   useEffect(() => {
    //     if (route.params?.updated) {
    //       fetchAddresses();
    //     }
    //   }, [route]);

    //   const fetchAddresses = async () => {
    //     try {
    //       setFetchingAddresses(true);
    
    //     //   let {biz_action, data, biz_msg, server_time} = await client.get(
    //     //     '/api/addresses',
    //     //   );
    
    //     //   if (biz_action != 0) {
    //     //     throw Error(biz_msg)
    //     //   }
    //     const {data} = []
    
    //       let list = data?.addresses?.map(item => {
    //         delete item.map_json;
    
    //         item.formatted_address = formAddress(item.address, item.city_name, item.province_name)
    
    //         return item;
    //       });
    
    //       setAddresses(list);
    
    //     } catch (err) {
    //       axiosErrorHandler(err)
    //     } finally {
    //       setFetchingAddresses(false)
    //     }
    //   };

    //   const onSelectAddress = item => {
    //     console.log('address selected: ', item);
    
    //     mode === 'select' ? gotoStoreList(item) : gotoAddEditAddress(item);
    //   };

    //   const gotoStoreList = item => {
    //     navigation.navigate('StoreList', {
    //       from: 'SelectAddress',
    //       address_id: item.id,
    //       address: item.address,
    //       lat: item.lat,
    //       lng: item.lng,
    //       province_id: item.province_id,
    //       is_default: item.is_default,
    //     });
    //   };

    //   const gotoAddEditAddress = item => {
    //     navigation.navigate('AddEditAddress', {
    //       mode: 'edit',
    //       from: 'SelectAddress',
    //       address_id: item.id,
    //       address: item.address,
    //       mobile: item.mobile,
    //       nickname: item.consignee,
    //       lat: item.lat,
    //       lng: item.lng,
    //       province_id: item.province_id,
    //       province_name: item.province_name,
    //       city_id: item.city_id,
    //       city_name: item.city_name,
    //       zip_code: item.zip_code,
    //       is_default: item.is_default,
    //       house_number: item.house_number,
    //       label: item.label,
    //     });
    //   };
    return (
        <div>
            <div className='flex w-full p-4 border-b'>
                 <div className='flex w-full'>
                     <FaArrowLeft
                        className='icon-size'
                        onClick={() => navigation('/address')} />
                    <span className='ml-4'>Create Address</span>
                </div>
            </div>
            <div className="main-wrapper">
                <MyGoogleMap />
            </div>
        </div>
    );
}

export default CreateAddress;