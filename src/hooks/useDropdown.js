
import { useState, useEffect, useRef} from 'react';


const useDropdown = () => {

    const [isOpen, setisOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setisOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };

    }, []);


    const toggleDropdown = () => {
        setisOpen(!isOpen);
    }


    return { isOpen, toggleDropdown, dropdownRef}

}


export default useDropdown;
