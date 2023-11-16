import ElibTemplate from "@/components/templates/Elib";
import RootLayoutTemplate from "@/components/templates/RootLayout";
import { Book, SideNavItem } from "@/types";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Ứng dụng",
    icon: <FontAwesomeIcon icon={faBorderAll} width={20} height={20} />,
    subMenuItems: [
      { title: "Elib", path: "/template/elib" },
      { title: "Edict", path: "/template/edict" },
      { title: "ChatGPT", path: "/template/chat-gpt" },
    ],
  },
  {
    title: "Menu",
    icon: <FontAwesomeIcon icon={faBars} width={20} height={20} />,
    subMenuItems: [
      {
        title: "Tìm sách",
        path: "/template/elib",
        activePath: ["/", "/template/elib"],
      },
      { title: "Tra từ", path: "/template/edict", activePath: ["/"] },
      {
        title: "Tra tổng hợp",
        path: "/template/edict",
        activePath: ["/template/edict"],
      },
      {
        title: "Tra theo bộ thủ",
        path: "/template/edict/radical",
        activePath: ["/template/edict"],
      },
      {
        title: "Tra theo nét viết",
        path: "/template/edict/stroke",
        activePath: ["/template/edict"],
      },
      {
        title: "Tra theo hình thái",
        path: "/template/edict/variant",
        activePath: ["/template/edict"],
      },
      {
        title: "Quản lý từ",
        path: "/template/edict/admin",
        activePath: ["/template/edict"],
      },
      {
        title: "Tác giả",
        path: "/template/elib/author",
        activePath: ["/template/elib"],
      },
      {
        title: "Nhà xuất bản",
        path: "/template/elib/publisher",
        activePath: ["/template/elib"],
      },
      {
        title: "Quản lý sách",
        path: "/template/elib/admin",
        activePath: ["/template/elib"],
      },
    ],
  },
];

const BOOKS: Book[] = [
  {
    id: 8,
    title: "Mở rộng vốn từ Hán-Việt",
    description: "",
    image: "/media/book-image/2023/11/12/103345-mo-rong-von-tu-han-viet.jpg",
    code: "mrvthv",
    parent_code: "null",
    source: {
      id: 1,
      name_source: "Tủ Sách Tiếng Việt",
      url_source: "https://tusachtiengviet.com",
      color: "FFFFFF",
      background: "#637ab7",
    },
    url_book_source:
      "https://elib.ilearnvn.org/elib_files/books/mo-rong-von-tu-han-viet",
    is_redirect_to_source: 0,
    children_count: 0,
    year: 2002,
    count_view: 123,
    position: 0,
    categories: [
      {
        id: 8,
        name: "Văn học",
        code: "van-hoc",
        parent_code: "null",
        children_count: 0,
        position: null,
      },
    ],
    book_documents: [],
    authors: [],
    child_books: [],
  },
  {
    id: 7,
    title: "Binh Chế Việt Nam",
    description: "",
    image: "/media/book-image/2023/11/12/103245-binh-che-viet-nam.jpg",
    code: "bcvn",
    parent_code: "null",
    source: {
      id: 1,
      name_source: "Tủ Sách Tiếng Việt",
      url_source: "https://tusachtiengviet.com",
      color: "FFFFFF",
      background: "#637ab7",
    },
    url_book_source:
      "https://elib.ilearnvn.org/elib_files/books/binh-che-viet-nam",
    is_redirect_to_source: 0,
    children_count: 0,
    year: 1950,
    count_view: 2,
    position: 0,
    categories: [
      {
        id: 14,
        name: "Lượt khảo",
        code: "luot-khao",
        parent_code: null,
        children_count: null,
        position: null,
      },
    ],
    book_documents: [],
    authors: [
      {
        id: 16,
        name: "Nguyễn Tưởng Phượng",
        code: "nguyen-tuong-phuong",
      },
    ],
    child_books: [],
  },
  {
    id: 6,
    title: "Truyện Kièu",
    description: "",
    image: "/media/book-image/2023/11/12/103135-truyen-kieu.jpg",
    code: "tk",
    parent_code: "null",
    source: {
      id: 1,
      name_source: "Tủ Sách Tiếng Việt",
      url_source: "https://tusachtiengviet.com",
      color: "FFFFFF",
      background: "#637ab7",
    },
    url_book_source: "https://elib.ilearnvn.org/elib_files/books/truyen-kieu",
    is_redirect_to_source: 0,
    children_count: 0,
    year: 1820,
    count_view: 98,
    position: 0,
    categories: [
      {
        id: 8,
        name: "Văn học",
        code: "van-hoc",
        parent_code: "null",
        children_count: 0,
        position: null,
      },
    ],
    book_documents: [],
    authors: [
      {
        id: 15,
        name: "Nguyễn Du",
        code: "nguyen-du",
      },
    ],
    child_books: [],
  },
  {
    id: 5,
    title: "Côn Lôn sử lược",
    description: "",
    image: "/media/book-image/2023/11/12/172639-con-lon-su-luoc.png",
    code: "clsl",
    parent_code: "null",
    source: {
      id: 1,
      name_source: "Tủ Sách Tiếng Việt",
      url_source: "https://tusachtiengviet.com",
      color: "FFFFFF",
      background: "#637ab7",
    },
    url_book_source:
      "https://elib.ilearnvn.org/elib_files/books/con-lon-su-luoc",
    is_redirect_to_source: 0,
    children_count: 0,
    year: 1960,
    count_view: 23,
    position: 0,
    categories: [
      {
        id: 12,
        name: "Chính trị",
        code: "chinh-tri",
        parent_code: null,
        children_count: null,
        position: null,
      },
      {
        id: 13,
        name: "Quân sự và kinh tế",
        code: "quan-su-va-kinh-te",
        parent_code: null,
        children_count: null,
        position: null,
      },
    ],
    book_documents: [],
    authors: [
      {
        id: 14,
        name: "Trần Văn Quế",
        code: "tran-van-que",
      },
    ],
    child_books: [],
  },
  {
    id: 4,
    title: "Chữ Nho tự học",
    description: "",
    image: "/media/book-image/2023/11/12/102313-chu-nho-tu-hoc.jpg",
    code: "cnth",
    parent_code: "null",
    source: {
      id: 1,
      name_source: "Tủ Sách Tiếng Việt",
      url_source: "https://tusachtiengviet.com",
      color: "FFFFFF",
      background: "#637ab7",
    },
    url_book_source:
      "https://elib.ilearnvn.org/elib_files/books/chuyen-xua-tich-cu",
    is_redirect_to_source: 0,
    children_count: 0,
    year: 1973,
    count_view: 293,
    position: 0,
    categories: [
      {
        id: 8,
        name: "Văn học",
        code: "van-hoc",
        parent_code: "null",
        children_count: 0,
        position: null,
      },
    ],
    book_documents: [],
    authors: [
      {
        id: 11,
        name: "Đào Mộng Nam",
        code: "dao-mong-nam",
      },
    ],
    child_books: [],
  },
  {
    id: 3,
    title: "Chuyện xưa tích cũ",
    description: "",
    image: "/media/book-image/2023/11/12/102052-chuyen-xua-tich-cu.jpg",
    code: "cxtc",
    parent_code: "null",
    source: {
      id: 1,
      name_source: "Tủ Sách Tiếng Việt",
      url_source: "https://tusachtiengviet.com",
      color: "FFFFFF",
      background: "#637ab7",
    },
    url_book_source:
      "https://elib.ilearnvn.org/elib_files/books/chuyen-xua-tich-cu",
    is_redirect_to_source: 0,
    children_count: 0,
    year: 1998,
    count_view: 0,
    position: 0,
    categories: [
      {
        id: 8,
        name: "Văn học",
        code: "van-hoc",
        parent_code: "null",
        children_count: 0,
        position: null,
      },
      {
        id: 9,
        name: "Lịch sử",
        code: "lich-su",
        parent_code: "null",
        children_count: 0,
        position: null,
      },
    ],
    book_documents: [],
    authors: [
      {
        id: 12,
        name: "Sơn Nam",
        code: "son-nam",
      },
      {
        id: 13,
        name: "Tô Nguyệt Đình",
        code: "to-nguyet-dinh",
      },
    ],
    child_books: [],
  },
  {
    id: 2,
    title: "Cao Nguyên Miền Thượng",
    description: "",
    image: "/media/book-image/2023/11/12/101833-cao-nguyen-mien-thuong.png",
    code: "cnmt",
    parent_code: "null",
    source: {
      id: 2,
      name_source: "Quán Ven Đường",
      url_source: "http://ndclnh-mytho-usa.org/KhoChuaSachCu.htm",
      color: "FFFFFF",
      background: "#e4ca9c",
    },
    url_book_source:
      "https://tusachtiengviet.com/images/file/fFFS4lFc0wgBAtNy/w150/cao-nguyen-mien-thuong-quyen-thuong.png",
    is_redirect_to_source: 0,
    children_count: 0,
    year: 1974,
    count_view: 28,
    position: 0,
    categories: [
      {
        id: 11,
        name: "Sưu thảo",
        code: "suu-thao",
        parent_code: null,
        children_count: null,
        position: null,
      },
    ],
    book_documents: [
      {
        id: 2,
        file_name:
          "Cao nguyên miền thượng - Quyển thượng - Cửu Long Giang - Toan Ánh - 1974.pdf",
        file_size: "89189257",
        web_path: null,
        system_path:
          "/media/book-documents/2023/11/12/105845-cao_nguy%C3%AAn_mi%E1%BB%81n_th%C6%B0%E1%BB%A3ng_-_quy%E1%BB%83n_th%C6%B0%E1%BB%A3ng_-_c%E1%BB%ADu_long_giang__NBVymbh.pdf",
        file_type: "pdf",
        code: "cao-nguyen-mien-thuong",
        book_code: 2,
        position: null,
      },
    ],
    authors: [
      {
        id: 9,
        name: "Cửu Long Giang",
        code: "cuu-long-giang",
      },
      {
        id: 10,
        name: "Toàn Ánh",
        code: "toan-anh",
      },
    ],
    child_books: [],
  },
  {
    id: 1,
    title: "Bạch Vân Thi Tập",
    description:
      "Bạch Vân thi tập là một tuyển tập các bài thơ chữ Hánđược viết bởi \r\nNguyễn Bỉnh Khiêm (1491-1585), người được coi là một nhà giáo tuyệt vời, \r\nmột nhà thơ xuất sắc , một nhà hiền triết, và sau này được tôn lên làm \r\nthánh trong đạo Cao Đài.",
    image: "/media/book-image/2023/11/12/101327-bach-van-thi-tap.jpg",
    code: "bvtt",
    parent_code: "null",
    source: {
      id: 1,
      name_source: "Tủ Sách Tiếng Việt",
      url_source: "https://tusachtiengviet.com",
      color: "FFFFFF",
      background: "#637ab7",
    },
    url_book_source:
      "https://elib.ilearnvn.org/elib_files/books/bach-van-thi-tap_nguyen-binh-khiem.png",
    is_redirect_to_source: 0,
    children_count: 2,
    year: 1814,
    count_view: 100,
    position: 1,
    categories: [
      {
        id: 8,
        name: "Văn học",
        code: "van-hoc",
        parent_code: "null",
        children_count: 0,
        position: null,
      },
    ],
    book_documents: [
      {
        id: 3,
        file_name: "bach-van-quoc-ngu-thi-tap.pdf",
        file_size: "2618217",
        web_path: null,
        system_path:
          "/media/book-documents/2023/11/12/105925-bach-van-quoc-ngu-thi-tap.pdf",
        file_type: "pdf",
        code: "bach-van-quoc-ngu-thi-tap",
        book_code: 1,
        position: null,
      },
    ],
    authors: [
      {
        id: 1,
        name: "Nguyễn Bỉnh Khiêm",
        code: "Nguyen Binh Khiem",
      },
    ],
    child_books: [],
  },
];

const TAB_BAR_ITEMS = [
  { title: "Tên sách", path: "/template/elib" },
  { title: "Tác giả", path: "/template/elib/author" },
  { title: "Nhà xuất bản", path: "/template/elib/publisher" },
];

const PAGE_TITLES = [{ title: "Template", path: null }];

export default function ElibTemplatePage({}: Props) {
  return (
    <RootLayoutTemplate sideBar={SIDENAV_ITEMS} pageTitles={PAGE_TITLES}>
      <ElibTemplate books={BOOKS} actionBar={TAB_BAR_ITEMS} />
    </RootLayoutTemplate>
  );
}
