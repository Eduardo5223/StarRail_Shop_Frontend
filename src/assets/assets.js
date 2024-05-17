import logo from './star_rail.png'
import shopping_cart from './carrito-de-compras.png'
import halo_inf_case from './halo_infinite_popular.jpg'
import elden_ring_case from './elden_ring_prod.jpg'
import doom_eternal_case from './doom_eternal_popular.jpg'
import facebook from './facebook_icon.png'
import linkedin from './linkedin_icon.png'
import twitter from './twitter_icon.png'
import dropdown_icon from './dropdown_icon.png'
import stellar_blade_case from './stellar_blade_prod.jpg'
import cross_icon from './cross_icon.png'
import arrow_icon from './breadcrum_arrow.png'
import star_icon from './star_icon.png'
import star_dull_icon from './star_dull_icon.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './play_logo.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.jpg'


export const assets = {
    logo,
    shopping_cart,
    facebook,
    linkedin,
    twitter,
    dropdown_icon,
    stellar_blade_case,
    cross_icon,
    arrow_icon,
    star_icon,
    star_dull_icon,
    profile_icon,
    bag_icon
}

export const prod_list = [
    {
        _id: 1,
        nombre: "Halo Infinite",
        sku: 45879,
        image: halo_inf_case,
        plataforma: 'xbox',
        precio: 500
    },
    {
        _id: 2,
        nombre: "Elden Ring",
        sku: 45879,
        image: elden_ring_case,
        plataforma: 'xbox',
        precio: 1000
    }, {
        _id: 3,
        nombre: "Doom Eternal",
        sku: 45879,
        image: doom_eternal_case,
        plataforma: 'xbox',
        precio: 800
    },{
        _id: 4,
        nombre: "Stellar Blade",
        sku: 125487,
        image: stellar_blade_case,
        plataforma: 'ps5',
        precio: 800
    }
]

export const plat_list = [
    {
        menu_name: "xbox",
        menu_image: menu_1
    },
    {
        menu_name: "ps5",
        menu_image: menu_2
    },
    {
        menu_name: "nintendo switch",
        menu_image: menu_3
    },
    {
        menu_name: "other",
        menu_image: menu_4
    }]