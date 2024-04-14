import {reactive} from "vue";
import re from "vue3-toastify";

export const store = reactive(
    {
        "isAuth": localStorage.getItem("token") !== null,
        "isAdmin": localStorage.getItem("user_role") === "ADMIN",
        "userId": localStorage.getItem("user_id"),
        "isDebug": false,
    }
)

export const clearStore = () => {
    store.isAuth = false;
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_id");
}

export const incCart = (product) => {
    let data = getCartData();
    let find = data.find((element) => element.product_id === product.product_id);
    if (find) {
        find.count += 1
    } else {
        product.count = 1
        data.push(product)
    }
    setCartData(data)
}

export const decCart = (product) => {
    let data = getCartData();
    let find = data.find((element) => element.product_id === product.product_id);
    if (find) {
        if (find.count <= 1) {
            data = delCart(product)
        } else {
            find.count -= 1
        }
    } else {
        product.count = 1
        data.push(product)
    }
    setCartData(data)
}

export const delCart = (product) => {
    let data = getCartData();
    data = data.filter((element) => element.product_id !== product.product_id)
    setCartData(data)
    return data
}

export const getCartData = () => {
    let data = localStorage.getItem('cart');
    if (!data) return []
    return JSON.parse(data)
}

const setCartData = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

export const clearCartData = () => {
    localStorage.removeItem('cart')
}

export const getUsers = () => {
    let data = localStorage.getItem('users');
    if (!data) return []
    return JSON.parse(data)
}

const setUsers = (data) => {
    localStorage.setItem('users', JSON.stringify(data))

}

export const registerUser = (user) => {
    let data = getUsers();
    let find = data.find((element) => element.email === user.email);
    if (find) {
        return false
    }
    data.push(user)

    setUsers(data)
    return true
}

export const checkUserPass = (user) => {
    let data = getUsers();
    let find = data.find((element) => element.email === user.email && element.password === user.password);
    return !!find;
}

export let products = [
    {
        'img': 'https://babybug.ru/upload/resize_cache/iblock/518/776_418_2/vhfnlubto95l6vehd63qmds1oi2fygi1.png',
        'price': 1600,
        'description': 'Милый слоник "Лапка"',
        'product_id': 1
    },
    {
        'img': 'https://ir.ozone.ru/s3/multimedia-0/c1000/6510067440.jpg',
        'price': 1900,
        'description': 'Кукла "Маша"',
        'product_id': 2

    },
    {
        'img': 'https://ir.ozone.ru/s3/multimedia-l/c1000/6509207745.jpg',
        'price': 1500,
        'description': 'Карапуз',
        'product_id': 3
    },
    {
        'img': 'https://static.beloris.ru/content/catalog_image/159146/tmp/1280_1280compress_700-nw.jpg',
        'price': 1900,
        'description': 'Заводная игрушка Цыплёнок в яйце',
        'product_id': 4
    },
    {
        'img': 'https://img.joomcdn.net/aedaee85806892f38ba8c3cc231ec90bbdf7a73b_original.jpeg',
        'price': 1500,
        'description': 'Рыбалка',
        'product_id': 5
    },
    {
        'img': 'https://sochi.malyish.ru/upload/resize_cache/iblock/95b/250_200_1/95b9f89d995c3726e2b9d9f224e6c88a.jpg',
        'price': 500,
        'description': 'пришленец',
        'product_id': 6
    },
    {
        'img': 'https://yar-tovary.ru/images/777.jpg',
        'price': 1700,
        'description': 'Такса',
        'product_id': 7
    },
    {
        'img': 'https://www.i-igrushki.ru/upload/iblock/4ec/mtlrgpdn3qk4fh58yzd33rt529g5bci0.jpg',
        'price': 1750,
        'description': 'Девочка такса',
        'product_id': 8
    },
    {
        'img': 'https://ae04.alicdn.com/kf/S852d53d5723d4fa6ab8fc156a03fa5bcN.jpg_640x640.jpg',
        'price': 5000,
        'description': 'Капибара плюшевая',
        'product_id': 9
    }
]