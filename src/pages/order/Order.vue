<template>
  <div class="card my-3 shadow-sm">
    <img src="../../assets/merchant_logo/shopeefood.png" class="img-fluid rounded-start mx-3 py-2" alt="" width="72"
         height="72">
    <div class="row g-0 pb-3">
      <div class="col-md-4">
        <img src="https://static.mservice.io/blogscontents/momo-upload-api-190919103148-637044859082271752.jpg"
             class="img-fluid rounded-start px-3" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="card-title mb-3 fw-bold h4">Mì trộn Nam Kỳ - Phan Văn Trị</div>

          <div>
            <div class="mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              <span style="padding-left: 10px"> <a>2-2A Trần Hưng Đạo, P. Bến Thành, Quận 1, TP. HCM</a></span>
            </div>

            <div class="mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe"
                   viewBox="0 0 16 16">
                <path
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
              </svg>
              <span style="padding-left: 10px"> <a href="https://shopeefood.vn/ho-chi-minh/ga-ran-ben-thanh">https://shopeefood.vn/ho-chi-minh/ga-ran-ben-thanh</a></span>
            </div>

            <div class="mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
              </svg>
              <span style="padding-left: 10px"> <a>Opening hours: Today  07:00 ~ 23:00</a></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!--  Sticky column order-->
  <div id="main-content" class="row">
    <div class="col-sm-2 sidebar-left">
      <div class="fw-bold fs-4 mt-2 mb-3">Category</div>
      <div class="card py-2 shadow-sm">
        <div v-for="data in dataForm" @click="scrollToSection(data.dish_name_hyphen)">
          <div
              class="my-1 px-2 py-1 cursor-pointer card-text-ellipsis h-auto"
              :class="data.dish_name_hyphen === categoryActive ? 'fw-bold rounded text-active-menu' : ''"
          >
            {{ data.dish_type_name }}
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-7 mt-2">
      <div v-for="category in dataForm">
        <div class="fw-bold fs-4 mb-3" :id="category.dish_name_hyphen"> {{ category.dish_type_name }}</div>
        <div class="row">
          <div class="col-sm-4 mb-4" v-for="dishes in category.dishes">
            <div class="card shadow">
              <div class="zoom-img-container">
                <img :src="dishes.photos[0].value" class="card-img-top" alt="">
              </div>

              <div class="card-body">
                <p class="card-text-ellipsis fw-bold">{{ dishes.name }}</p>
                <div class="fs-price d-flex justify-content-between">
                  <div class="fw-bold">{{ dishes.price.text }}</div>
<!--                  <div class="btn-add">+</div>-->
                  <div class="btn-group" role="group" aria-label="Second group">
                    <div class="btn-sm btn-minus">-</div>
                    <div class="mx-3 fw-bold" style="line-height: 20px">2</div>
                    <div class="btn-sm btn-add">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 sidebar-right">
      <div class="fw-bold fs-4 mt-2 mb-3">Ordered</div>
      <div class="card shadow-sm p-3" id="order-content">
        <div class="card" v-for="number in 6">
          <div class="row g-0">
            <div class="col-sm-2">
              <img src="https://images.foody.vn/res/g100007/1000068234/s120x120/d16b7802-4b34-4013-be8d-027e4281-128d3709-230828190805.jpeg" class="img-fluid rounded" alt="...">
            </div>
            <div class="col-sm-10 ps-3">
              <p class="card-text-ellipsis fw-bold text-order">Mì trộn cá viên sốt mắm tỏi</p>
              <!-- COMMENT -->
              <div class="row align-items-start my-1">
                <div class="col-sm-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </div>
                <span class="col-sm-10 ps-0 fs-note card-text-ellipsis">Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note Note </span>
              </div>

              <div class="fs-price d-flex justify-content-between mt-2">
                <div class="fw-bold">29.000đ</div>
                <div class="btn-group" role="group" aria-label="Second group">
                  <div class="btn-sm btn-minus">-</div>
                  <div class="mx-3 fw-bold" style="line-height: 20px">2</div>
                  <div class="btn-sm btn-add">+</div>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </div>

        <!-- Total order-->
        <div class='d-flex justify-content-between'>
          <p>Tổng cộng</p>
          <p class="fw-bold">204.000đ</p>
        </div>

        <button type="button" class="btn btn-sm bg-main w-100 text-white">Đặt món</button>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";
import convertStringToUrl from "@/composables/common/convertStringToUrl.js";

const url = '/api/dish/get_delivery_dishes?id_type=2&request_id=309258&version=123'

const dataForm = ref([])
const categoryActive = ref(null)
const {convertString} = convertStringToUrl()

const configHeader = {
  headers: {
    '34746531': "Ig/W@'dNfSM^/<tND*a731F.%D^g+=T]$<:,Ng-t1ROadA<ln;iVa?4U.\\l%695/phu$5X1d\"D\\E7F\"7o(Kq8R.;jeSS@o'GY9,%fuG=(5gPt8K[TnPhm1SJ)^Z&\"]i_<O+L:PSk6N=V;'*?OW@p6\\lW<[^\\mM\\K$EKtIcYei-<TDK.@1Z=NZ^deI*$Z.P@]PS8)",
    '1e29077c': "5<KUlGBY^MiTP;E''A(M('GR3",
    // 'authority': 'hito-ordering.netlify.app',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
    'b95db4da': "<k,i?r+A6q794AI7>_$i?i_ZM",
    // 'origin': 'https://shopeefood.vn',
    // 'referer': 'https://shopeefood.vn/',
    // 'sec-ch-ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    // 'sec-ch-ua-mobile': '?0',
    // 'sec-ch-ua-platform': 'Windows',
    // 'sec-fetch-dest': 'empty',
    // 'sec-fetch-mode': 'cors',
    // 'sec-fetch-site': 'cross-site',
    // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
    'x-foody-access-token': '',
    'x-foody-api-version': '1',
    'x-foody-app-type': '1004',
    'x-foody-client-id': '',
    'x-foody-client-language': 'vi',
    'x-foody-client-type': '1',
    'x-foody-client-version': '3.0.0',
    'x-sap-ri': 'ccdb616510ae97d358f6b53a655a8ff5dd39de4c1451481d'
  },
  withCredentials: true
}

const getData = async () => {
  try {
    await axios({
      baseURL: url,
      method: 'get',
      headers: configHeader.headers
    }).then(res => {
      console.log('direct')
      if(res && res.data.reply.menu_infos.length > 0){
        dataForm.value = res.data.reply.menu_infos
        dataForm.value.forEach((item, index) => {
          item.dish_name_hyphen = convertString(item.dish_type_name)
          if(index === 0){
            categoryActive.value = item.dish_name_hyphen
          }
        })
      }

    })

  } catch (error) {
    console.log(error)
  }
}

const scrollToSection = (element) => {
  let targetElement = document.getElementById(element);
  targetElement.scrollIntoView({
    behavior: 'smooth',
  });

  categoryActive.value = element
}

onMounted(() => {
  getData()
})

</script>

<style scoped>
.card {
  border: none;
}

.bg-main {
  background-color: #ee4d2d;
}

.text-active-menu {
  color: #ee4d2d;
}

.cursor-pointer:hover {
  cursor: pointer;
}

.btn-add {
  text-align: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  line-height: 18px;
  width: 20px;
  height: 20px;
  background-color: #ee4d2d;
  border-radius: 5px;
}

.btn-minus {
  text-align: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  line-height: 18px;
  width: 20px;
  height: 20px;
  background-color: dimgray;
  border-radius: 5px;
}

.card-text-ellipsis {
  overflow: hidden;
  height: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.text-order {
  margin-top: 0;
  margin-bottom: 0;
}

.fs-note {
  font-size: 12px;
}

/* For zoom image when hover*/
.zoom-img-container {
  position: relative;
  overflow: hidden;
  max-width: 100%;
}

.zoom-img-container img {
  transition: transform 0.3s ease;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.zoom-img-container:hover img {
  transform: scale(1.2);
}

/* For test sticky column */
.sidebar-left, .sidebar-right {
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
}

</style>
