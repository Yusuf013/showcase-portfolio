import NameAnimation from "./components/NameAnimation";
import FloatingText from "./components/FloatingText";

export default function Home() {
  return (
    <main>
      <NameAnimation />
      <div className="flex justify-center">
        <h2 className="text-[20px]">
          <span className="text-[#F47519]">Front-end developer</span> based in
          the Netherlands
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-32">
        <h2 className="text-[40px] text-[#F47519]">Latest projects</h2>

        <div className="w-full mt-20">
          <div className="relative">
          <svg
              className="w-full h-auto"
              viewBox="0 0 1440 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M850.159 0H-2V85.5H850.159L917.369 120.5H1440V36.5H917.369L850.159 0Z"
                fill="#FFFDE4"
              />
              <path
                d="M77.2902 45.496V51.205L68.2812 45.76C67.7972 45.474 67.3242 45.089 66.8622 44.605C66.4222 44.099 66.2022 43.483 66.2022 42.757V42.46C66.2022 41.734 66.4222 41.129 66.8622 40.645C67.3242 40.139 67.7972 39.743 68.2812 39.457L77.2902 34.012V39.721L71.8122 42.592L77.2902 45.496ZM104.439 37.246V39.688C104.439 42.372 103.625 44.22 101.997 45.232C100.369 46.244 97.8504 46.75 94.4404 46.75H88.6654V55H82.0654V30.25H94.4404C97.8504 30.25 100.369 30.789 101.997 31.867C103.625 32.945 104.439 34.738 104.439 37.246ZM97.8394 39.49V37.543C97.8394 36.773 97.5974 36.179 97.1134 35.761C96.6514 35.321 95.8264 35.101 94.6384 35.101H88.6654V41.899H94.6384C95.8264 41.899 96.6514 41.69 97.1134 41.272C97.5974 40.832 97.8394 40.238 97.8394 39.49ZM106.874 42.559C106.874 41.613 107.017 40.7 107.303 39.82C107.589 38.94 108.04 38.159 108.656 37.477C109.272 36.795 110.064 36.245 111.032 35.827C112.022 35.409 113.199 35.2 114.563 35.2H120.371V39.985H115.982C114.86 39.985 114.101 40.183 113.705 40.579C113.331 40.975 113.144 41.657 113.144 42.625V55H106.874V42.559ZM143.006 43.912V46.288C143.006 49.038 142.17 51.238 140.498 52.888C138.848 54.516 136.483 55.33 133.403 55.33H131.093C128.013 55.33 125.637 54.516 123.965 52.888C122.293 51.238 121.457 49.038 121.457 46.288V43.912C121.457 41.162 122.293 38.973 123.965 37.345C125.637 35.695 128.013 34.87 131.093 34.87H133.403C136.483 34.87 138.848 35.695 140.498 37.345C142.17 38.973 143.006 41.162 143.006 43.912ZM136.571 43.384C136.571 42.108 136.329 41.162 135.845 40.546C135.383 39.908 134.547 39.589 133.337 39.589H131.159C129.949 39.589 129.102 39.908 128.618 40.546C128.134 41.162 127.892 42.108 127.892 43.384V46.783C127.892 48.081 128.134 49.049 128.618 49.687C129.102 50.303 129.949 50.611 131.159 50.611H133.337C134.547 50.611 135.383 50.303 135.845 49.687C136.329 49.049 136.571 48.081 136.571 46.783V43.384ZM152.462 33.484H146.192V29.59H152.462V33.484ZM146.192 35.2H152.462V53.449C152.462 55.627 151.868 57.255 150.68 58.333C149.514 59.411 147.908 59.95 145.862 59.95H143.222V55.693H144.74C145.202 55.693 145.554 55.561 145.796 55.297C146.06 55.055 146.192 54.615 146.192 53.977V35.2ZM176.369 46.948H162.212V47.08C162.212 48.334 162.487 49.17 163.037 49.588C163.587 50.006 164.533 50.215 165.875 50.215H175.907V55H166.238C164.302 55 162.663 54.791 161.321 54.373C160.001 53.933 158.934 53.328 158.12 52.558C157.328 51.766 156.745 50.82 156.371 49.72C156.019 48.62 155.843 47.41 155.843 46.09V43.582C155.843 40.964 156.602 38.874 158.12 37.312C159.638 35.728 162.124 34.936 165.578 34.936H166.898C168.746 34.936 170.286 35.156 171.518 35.596C172.75 36.036 173.718 36.663 174.422 37.477C175.148 38.269 175.654 39.226 175.94 40.348C176.226 41.47 176.369 42.713 176.369 44.077V46.948ZM167.624 39.358H165.05C163.994 39.358 163.257 39.589 162.839 40.051C162.421 40.513 162.212 41.283 162.212 42.361V42.79H170.429V42.361C170.429 41.283 170.209 40.513 169.769 40.051C169.351 39.589 168.636 39.358 167.624 39.358ZM189.114 39.985C187.816 39.985 186.859 40.282 186.243 40.876C185.649 41.448 185.352 42.328 185.352 43.516V46.915C185.352 48.235 185.649 49.115 186.243 49.555C186.859 49.995 187.816 50.215 189.114 50.215H195.549V55H188.916C185.374 55 182.822 54.23 181.26 52.69C179.698 51.15 178.917 49.027 178.917 46.321V43.912C178.917 41.206 179.698 39.083 181.26 37.543C182.822 35.981 185.374 35.2 188.916 35.2H203.139V39.985H189.114ZM196.854 39.985V35.2H200.055V31.174H205.83V35.2H212.595V39.985H205.83V48.004C205.83 48.84 206.006 49.423 206.358 49.753C206.71 50.061 207.282 50.215 208.074 50.215H212.595V55H207.348C204.62 55 202.662 54.428 201.474 53.284C200.308 52.118 199.725 50.358 199.725 48.004V39.985H196.854ZM225.729 45.76L216.72 51.205V45.496L222.198 42.592L216.72 39.721V34.012L225.729 39.457C226.213 39.743 226.675 40.139 227.115 40.645C227.577 41.129 227.808 41.734 227.808 42.46V42.757C227.808 43.483 227.577 44.099 227.115 44.605C226.675 45.089 226.213 45.474 225.729 45.76Z"
                fill="#F47519"
              />
              <path
                d="M657.559 55.429C653.863 55.429 651.223 54.604 649.639 52.954C648.055 51.304 647.263 49.005 647.263 46.057V30.25H653.863V46.684C653.863 47.872 654.127 48.752 654.655 49.324C655.205 49.874 656.14 50.149 657.46 50.149H661.222C662.454 50.149 663.345 49.874 663.895 49.324C664.467 48.752 664.753 47.872 664.753 46.684V30.25H671.353V46.057C671.353 47.531 671.177 48.851 670.825 50.017C670.495 51.183 669.934 52.173 669.142 52.987C668.372 53.779 667.327 54.384 666.007 54.802C664.687 55.22 663.059 55.429 661.123 55.429H657.559ZM675.234 59.95V35.2H689.292C691.734 35.2 693.648 36.014 695.034 37.642C696.42 39.27 697.113 41.426 697.113 44.11V46.09C697.113 48.774 696.42 50.93 695.034 52.558C693.648 54.186 691.734 55 689.292 55H681.504V59.95H675.234ZM687.147 40.084H681.504V50.116H687.147C688.489 50.116 689.413 49.808 689.919 49.192C690.425 48.576 690.678 47.619 690.678 46.321V43.714C690.678 42.416 690.425 41.492 689.919 40.942C689.413 40.37 688.489 40.084 687.147 40.084ZM720.075 46.948H705.918V47.08C705.918 48.334 706.193 49.17 706.743 49.588C707.293 50.006 708.239 50.215 709.581 50.215H719.613V55H709.944C708.008 55 706.369 54.791 705.027 54.373C703.707 53.933 702.64 53.328 701.826 52.558C701.034 51.766 700.451 50.82 700.077 49.72C699.725 48.62 699.549 47.41 699.549 46.09V43.582C699.549 40.964 700.308 38.874 701.826 37.312C703.344 35.728 705.83 34.936 709.284 34.936H710.604C712.452 34.936 713.992 35.156 715.224 35.596C716.456 36.036 717.424 36.663 718.128 37.477C718.854 38.269 719.36 39.226 719.646 40.348C719.932 41.47 720.075 42.713 720.075 44.077V46.948ZM711.33 39.358H708.756C707.7 39.358 706.963 39.589 706.545 40.051C706.127 40.513 705.918 41.283 705.918 42.361V42.79H714.135V42.361C714.135 41.283 713.915 40.513 713.475 40.051C713.057 39.589 712.342 39.358 711.33 39.358ZM723.316 55V35.2H735.592C738.474 35.2 740.564 35.926 741.862 37.378C743.16 38.83 743.809 40.799 743.809 43.285V55H737.539V43.12C737.539 42.108 737.363 41.393 737.011 40.975C736.681 40.535 736.032 40.315 735.064 40.315H729.586V55H723.316ZM768.833 30.25V55H754.775C752.333 55 750.419 54.186 749.033 52.558C747.647 50.93 746.954 48.774 746.954 46.09V44.11C746.954 41.426 747.647 39.27 749.033 37.642C750.419 36.014 752.333 35.2 754.775 35.2H762.563V30.25H768.833ZM756.92 50.116H762.563V40.084H756.92C755.578 40.084 754.654 40.392 754.148 41.008C753.642 41.624 753.389 42.581 753.389 43.879V46.486C753.389 47.784 753.642 48.719 754.148 49.291C754.654 49.841 755.578 50.116 756.92 50.116ZM793.511 43.912V46.288C793.511 49.038 792.675 51.238 791.003 52.888C789.353 54.516 786.988 55.33 783.908 55.33H781.598C778.518 55.33 776.142 54.516 774.47 52.888C772.798 51.238 771.962 49.038 771.962 46.288V43.912C771.962 41.162 772.798 38.973 774.47 37.345C776.142 35.695 778.518 34.87 781.598 34.87H783.908C786.988 34.87 789.353 35.695 791.003 37.345C792.675 38.973 793.511 41.162 793.511 43.912ZM787.076 43.384C787.076 42.108 786.834 41.162 786.35 40.546C785.888 39.908 785.052 39.589 783.842 39.589H781.664C780.454 39.589 779.607 39.908 779.123 40.546C778.639 41.162 778.397 42.108 778.397 43.384V46.783C778.397 48.081 778.639 49.049 779.123 49.687C779.607 50.303 780.454 50.611 781.664 50.611H783.842C785.052 50.611 785.888 50.303 786.35 49.687C786.834 49.049 787.076 48.081 787.076 46.783V43.384Z"
                fill="#F47519"
              />
              <path
                d="M1054.15 92V73.85C1054.15 72.728 1054.34 71.727 1054.71 70.847C1055.08 69.967 1055.57 69.241 1056.16 68.669C1056.78 68.075 1057.49 67.624 1058.31 67.316C1059.14 67.008 1060 66.854 1060.88 66.854C1062.99 66.854 1064.64 67.426 1065.83 68.57C1067.04 69.692 1068.02 71.177 1068.77 73.025L1074.15 86.159C1074.21 86.313 1074.28 86.467 1074.35 86.621C1074.43 86.753 1074.57 86.819 1074.74 86.819C1074.96 86.819 1075.1 86.764 1075.17 86.654C1075.26 86.522 1075.3 86.346 1075.3 86.126V67.25H1081.9V85.433C1081.9 86.599 1081.72 87.622 1081.34 88.502C1080.97 89.382 1080.47 90.119 1079.86 90.713C1079.26 91.285 1078.55 91.714 1077.71 92C1076.9 92.286 1076.05 92.429 1075.17 92.429C1073.06 92.429 1071.41 91.879 1070.22 90.779C1069.05 89.679 1068.08 88.172 1067.28 86.258L1061.9 73.124C1061.84 72.97 1061.76 72.827 1061.67 72.695C1061.61 72.541 1061.49 72.464 1061.31 72.464C1061.09 72.464 1060.94 72.53 1060.85 72.662C1060.78 72.772 1060.75 72.937 1060.75 73.157V92H1054.15ZM1106.81 80.912V83.288C1106.81 86.038 1105.97 88.238 1104.3 89.888C1102.65 91.516 1100.29 92.33 1097.21 92.33H1094.9C1091.82 92.33 1089.44 91.516 1087.77 89.888C1086.1 88.238 1085.26 86.038 1085.26 83.288V80.912C1085.26 78.162 1086.1 75.973 1087.77 74.345C1089.44 72.695 1091.82 71.87 1094.9 71.87H1097.21C1100.29 71.87 1102.65 72.695 1104.3 74.345C1105.97 75.973 1106.81 78.162 1106.81 80.912ZM1100.37 80.384C1100.37 79.108 1100.13 78.162 1099.65 77.546C1099.19 76.908 1098.35 76.589 1097.14 76.589H1094.96C1093.75 76.589 1092.9 76.908 1092.42 77.546C1091.94 78.162 1091.69 79.108 1091.69 80.384V83.783C1091.69 85.081 1091.94 86.049 1092.42 86.687C1092.9 87.303 1093.75 87.611 1094.96 87.611H1097.14C1098.35 87.611 1099.19 87.303 1099.65 86.687C1100.13 86.049 1100.37 85.081 1100.37 83.783V80.384ZM1113.85 72.2L1118.27 86.093C1118.4 86.511 1118.52 86.786 1118.63 86.918C1118.74 87.028 1118.9 87.083 1119.09 87.083C1119.25 87.083 1119.38 87.017 1119.49 86.885C1119.6 86.731 1119.72 86.445 1119.85 86.027L1124.24 72.2H1130.51L1125.17 87.182C1124.53 88.964 1123.72 90.273 1122.76 91.109C1121.79 91.923 1120.57 92.33 1119.09 92.33C1117.51 92.33 1116.21 91.934 1115.2 91.142C1114.19 90.328 1113.38 89.096 1112.79 87.446L1107.38 72.2H1113.85ZM1151.61 83.948H1137.45V84.08C1137.45 85.334 1137.73 86.17 1138.28 86.588C1138.83 87.006 1139.78 87.215 1141.12 87.215H1151.15V92H1141.48C1139.54 92 1137.91 91.791 1136.56 91.373C1135.24 90.933 1134.18 90.328 1133.36 89.558C1132.57 88.766 1131.99 87.82 1131.61 86.72C1131.26 85.62 1131.09 84.41 1131.09 83.09V80.582C1131.09 77.964 1131.84 75.874 1133.36 74.312C1134.88 72.728 1137.37 71.936 1140.82 71.936H1142.14C1143.99 71.936 1145.53 72.156 1146.76 72.596C1147.99 73.036 1148.96 73.663 1149.66 74.477C1150.39 75.269 1150.9 76.226 1151.18 77.348C1151.47 78.47 1151.61 79.713 1151.61 81.077V83.948ZM1142.87 76.358H1140.29C1139.24 76.358 1138.5 76.589 1138.08 77.051C1137.66 77.513 1137.45 78.283 1137.45 79.361V79.79H1145.67V79.361C1145.67 78.283 1145.45 77.513 1145.01 77.051C1144.59 76.589 1143.88 76.358 1142.87 76.358ZM1154.85 92V72.2H1178.35C1181.36 72.2 1183.54 72.926 1184.88 74.378C1186.22 75.83 1186.9 77.799 1186.9 80.285V92H1180.63V80.12C1180.63 79.108 1180.45 78.393 1180.1 77.975C1179.77 77.535 1179.12 77.315 1178.15 77.315H1173.99V92H1167.72V77.315H1161.12V92H1154.85ZM1190.75 92V67.25H1197.02V71.87H1204.81C1207.25 71.87 1209.17 72.684 1210.55 74.312C1211.94 75.94 1212.63 78.096 1212.63 80.78V83.09C1212.63 85.774 1211.94 87.93 1210.55 89.558C1209.17 91.186 1207.25 92 1204.81 92H1190.75ZM1202.67 76.754H1197.02V87.116H1202.67C1204.01 87.116 1204.93 86.808 1205.44 86.192C1205.94 85.576 1206.2 84.619 1206.2 83.321V80.384C1206.2 79.086 1205.94 78.162 1205.44 77.612C1204.93 77.04 1204.01 76.754 1202.67 76.754ZM1235.59 83.948H1221.44V84.08C1221.44 85.334 1221.71 86.17 1222.26 86.588C1222.81 87.006 1223.76 87.215 1225.1 87.215H1235.13V92H1225.46C1223.53 92 1221.89 91.791 1220.55 91.373C1219.23 90.933 1218.16 90.328 1217.34 89.558C1216.55 88.766 1215.97 87.82 1215.6 86.72C1215.24 85.62 1215.07 84.41 1215.07 83.09V80.582C1215.07 77.964 1215.83 75.874 1217.34 74.312C1218.86 72.728 1221.35 71.936 1224.8 71.936H1226.12C1227.97 71.936 1229.51 72.156 1230.74 72.596C1231.97 73.036 1232.94 73.663 1233.65 74.477C1234.37 75.269 1234.88 76.226 1235.16 77.348C1235.45 78.47 1235.59 79.713 1235.59 81.077V83.948ZM1226.85 76.358H1224.27C1223.22 76.358 1222.48 76.589 1222.06 77.051C1221.65 77.513 1221.44 78.283 1221.44 79.361V79.79H1229.65V79.361C1229.65 78.283 1229.43 77.513 1228.99 77.051C1228.58 76.589 1227.86 76.358 1226.85 76.358ZM1238.83 79.559C1238.83 78.613 1238.98 77.7 1239.26 76.82C1239.55 75.94 1240 75.159 1240.62 74.477C1241.23 73.795 1242.02 73.245 1242.99 72.827C1243.98 72.409 1245.16 72.2 1246.52 72.2H1252.33V76.985H1247.94C1246.82 76.985 1246.06 77.183 1245.67 77.579C1245.29 77.975 1245.1 78.657 1245.1 79.625V92H1238.83V79.559ZM1282.19 86.819V92H1261.76V87.974C1261.76 86.918 1261.87 85.972 1262.09 85.136C1262.31 84.3 1262.69 83.53 1263.24 82.826C1263.79 82.1 1264.52 81.407 1265.42 80.747C1266.35 80.065 1267.5 79.361 1268.89 78.635L1274.13 75.896C1274.71 75.61 1275.11 75.335 1275.35 75.071C1275.6 74.785 1275.72 74.433 1275.72 74.015C1275.72 73.399 1275.51 72.981 1275.09 72.761C1274.67 72.541 1274.11 72.431 1273.41 72.431H1262.29V67.25H1273.97C1276.92 67.25 1279.07 67.789 1280.44 68.867C1281.8 69.923 1282.48 71.375 1282.48 73.223C1282.48 74.257 1282.33 75.148 1282.02 75.896C1281.71 76.644 1281.25 77.315 1280.63 77.909C1280.04 78.503 1279.3 79.075 1278.42 79.625C1277.54 80.153 1276.53 80.725 1275.39 81.341L1270.6 83.948C1269.85 84.344 1269.37 84.707 1269.15 85.037C1268.95 85.367 1268.85 85.741 1268.85 86.159V86.819H1282.19ZM1309.5 81.275C1309.5 82.925 1309.27 84.432 1308.8 85.796C1308.36 87.16 1307.68 88.326 1306.76 89.294C1305.86 90.262 1304.71 91.01 1303.33 91.538C1301.94 92.066 1300.32 92.33 1298.47 92.33H1295.97C1294.12 92.33 1292.5 92.066 1291.12 91.538C1289.73 90.988 1288.57 90.229 1287.65 89.261C1286.75 88.293 1286.07 87.127 1285.6 85.763C1285.16 84.377 1284.94 82.859 1284.94 81.209V77.777C1284.94 76.149 1285.16 74.664 1285.6 73.322C1286.07 71.98 1286.75 70.836 1287.65 69.89C1288.57 68.944 1289.73 68.218 1291.12 67.712C1292.5 67.184 1294.12 66.92 1295.97 66.92H1298.47C1300.32 66.92 1301.94 67.184 1303.33 67.712C1304.71 68.24 1305.86 68.977 1306.76 69.923C1307.68 70.869 1308.36 72.024 1308.8 73.388C1309.27 74.73 1309.5 76.215 1309.5 77.843V81.275ZM1291.87 82.265C1291.87 83.981 1292.22 85.202 1292.9 85.928C1293.6 86.632 1294.78 86.984 1296.43 86.984H1298.01C1299.66 86.984 1300.83 86.632 1301.51 85.928C1302.21 85.202 1302.57 83.981 1302.57 82.265V76.919C1302.57 75.203 1302.21 73.993 1301.51 73.289C1300.83 72.585 1299.66 72.233 1298.01 72.233H1296.43C1294.78 72.233 1293.6 72.585 1292.9 73.289C1292.22 73.993 1291.87 75.203 1291.87 76.919V82.265ZM1331.91 86.819V92H1311.48V87.974C1311.48 86.918 1311.59 85.972 1311.81 85.136C1312.03 84.3 1312.42 83.53 1312.97 82.826C1313.52 82.1 1314.25 81.407 1315.15 80.747C1316.07 80.065 1317.23 79.361 1318.61 78.635L1323.86 75.896C1324.43 75.61 1324.84 75.335 1325.08 75.071C1325.32 74.785 1325.44 74.433 1325.44 74.015C1325.44 73.399 1325.23 72.981 1324.82 72.761C1324.4 72.541 1323.84 72.431 1323.13 72.431H1312.01V67.25H1323.69C1326.64 67.25 1328.8 67.789 1330.16 68.867C1331.53 69.923 1332.21 71.375 1332.21 73.223C1332.21 74.257 1332.05 75.148 1331.75 75.896C1331.44 76.644 1330.98 77.315 1330.36 77.909C1329.77 78.503 1329.03 79.075 1328.15 79.625C1327.27 80.153 1326.26 80.725 1325.11 81.341L1320.33 83.948C1319.58 84.344 1319.1 84.707 1318.88 85.037C1318.68 85.367 1318.58 85.741 1318.58 86.159V86.819H1331.91ZM1338.62 88.205C1336.58 88.205 1335.07 87.798 1334.1 86.984C1333.15 86.148 1332.68 85.103 1332.68 83.849C1332.68 82.991 1332.88 82.155 1333.28 81.341C1333.69 80.505 1334.38 79.493 1335.32 78.305L1341.29 70.814C1342.24 69.626 1343.27 68.68 1344.4 67.976C1345.54 67.272 1346.77 66.92 1348.09 66.92H1348.95C1350.47 66.92 1351.74 67.393 1352.78 68.339C1353.83 69.285 1354.36 70.781 1354.36 72.827V83.156H1358.16V88.205H1354.36V92H1347.93V88.205H1338.62ZM1340.54 83.156H1347.93V73.355C1347.93 73.135 1347.87 72.981 1347.76 72.893C1347.65 72.783 1347.51 72.728 1347.33 72.728C1347.2 72.728 1347.08 72.772 1346.97 72.86C1346.88 72.926 1346.79 73.025 1346.71 73.157L1339.94 81.836C1339.85 81.968 1339.78 82.089 1339.71 82.199C1339.67 82.309 1339.64 82.419 1339.64 82.529C1339.64 82.705 1339.7 82.859 1339.81 82.991C1339.94 83.101 1340.18 83.156 1340.54 83.156Z"
                fill="#F47519"
              />
            </svg>

            <svg
              className="absolute top-0 left-0 w-full h-auto transition-all duration-300 hover:h-[200px] opacity-0 hover:opacity-100"
              viewBox="0 0 1440 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M850.159 0H-2V85.5H850.159L917.369 120.5H1440V36.5H917.369L850.159 0Z"
                fill="#FFFDE4"
              />
              <path
                d="M77.2902 45.496V51.205L68.2812 45.76..."
                fill="#F47519"
              />
            </svg>
          </div>

          <div className="relative mt-10">
            <svg
              className="w-full h-auto transition-all duration-300 hover:h-[150px] hover:opacity-0"
              viewBox="0 0 1440 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M850.159 0H-2V85.5H850.159L917.369 120.5H1440V36.5H917.369L850.159 0Z"
                fill="#FFFDE4"
              />
              <path
                d="M77.2902 45.496V51.205L68.2812 45.76..."
                fill="#F47519"
              />
            </svg>

            <svg
              className="absolute top-0 left-0 w-full h-auto transition-all duration-300 hover:h-[200px] opacity-0 hover:opacity-100"
              viewBox="0 0 1440 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M850.159 0H-2V85.5H850.159L917.369 120.5H1440V36.5H917.369L850.159 0Z"
                fill="#FFFDE4"
              />
              <path
                d="M77.2902 45.496V51.205L68.2812 45.76..."
                fill="#F47519"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
