import React from "react"
import { Box, Link } from "@chakra-ui/react"

const Logo = () => {
  return (
    <Box w="full" maxW="243px" py={4}>
      <Link href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 522 236">
          <g fill="none" fillRule="evenodd">
            <path
              fill="#2E424B"
              d="M4.005 225.984h73.252v-1.92H4.005zM447.902 225.984h73.252v-1.92h-73.252zM12.181 174.919c0 .569.104.775.466.932 1.087.362 2.639.517 3.933.517 2.07 0 2.743-.207 3.675-.88 1.553-1.138 3.054-3.519 3.054-7.763 0-7.35-4.865-9.472-7.919-9.472-1.294 0-2.226.052-2.743.207-.362.103-.466.31-.466.725v15.734zm-6.108-4.089c0-7.867 0-9.317-.103-10.974-.104-1.758-.517-2.587-2.226-2.95-.414-.102-1.294-.154-2.018-.154-.57 0-.88-.104-.88-.466 0-.362.362-.467 1.138-.467 2.744 0 6.004.156 7.091.156 1.76 0 5.694-.156 7.298-.156 3.261 0 6.729.312 9.524 2.227 1.449.983 3.52 3.623 3.52 7.091 0 3.83-1.605 7.349-6.833 11.593 4.607 5.796 8.178 10.403 11.232 13.613 2.898 3.002 5.02 3.364 5.797 3.519a8.113 8.113 0 001.449.156c.414 0 .621.155.621.414 0 .413-.363.517-.983.517h-4.918c-2.898 0-4.192-.26-5.537-.983-2.226-1.191-4.193-3.623-7.091-7.609-2.071-2.846-4.451-6.366-5.125-7.142-.258-.311-.569-.362-.931-.362l-4.503-.104c-.259 0-.414.104-.414.414v.725c0 4.812 0 8.901.258 11.075.156 1.501.466 2.641 2.019 2.848.777.102 1.915.207 2.536.207.414 0 .622.155.622.414 0 .362-.363.517-1.036.517-3.002 0-6.832-.155-7.608-.155-.984 0-4.244.155-6.315.155-.673 0-1.035-.155-1.035-.517 0-.259.207-.414.828-.414.777 0 1.398-.105 1.863-.207 1.036-.207 1.294-1.347 1.501-2.848.259-2.174.259-6.263.259-11.024v-9.109zM74.29 176.368c0-11.594-6.677-18.788-15.165-18.788-5.953 0-12.733 3.313-12.733 16.2 0 10.765 5.952 19.306 15.89 19.306 3.623 0 12.008-1.76 12.008-16.718zm-35.04-.983c0-8.851 5.848-20.289 21.375-20.289 12.888 0 20.911 7.504 20.911 19.357s-8.282 21.221-21.428 21.221c-14.855 0-20.858-11.129-20.858-20.289zM105.395 175.851c-1.087-.777-2.277-1.139-4.296-1.243-.932-.051-1.449-.051-2.225-.051-.207 0-.311.103-.311.362v12.267c0 3.415.155 4.295 1.812 4.968 1.397.57 2.587.621 3.778.621 2.329 0 6.263-1.243 6.263-6.625 0-3.209-1.087-7.556-5.021-10.299zm-6.832-4.141c0 .414.155.518.362.569.466.103 1.242.156 2.433.156 1.708 0 2.847-.207 3.726-.985 1.346-1.087 2.123-2.95 2.123-5.485 0-3.468-2.019-8.023-6.47-8.023-.725 0-1.191 0-1.708.104-.362.103-.466.31-.466.879v12.785zm-6.211-.88c0-7.867 0-9.317-.103-10.974-.104-1.758-.518-2.587-2.226-2.95-.414-.102-1.294-.154-2.019-.154-.569 0-.879-.104-.879-.466 0-.362.362-.467 1.138-.467 2.743 0 6.004.156 7.039.156 2.536 0 4.555-.156 6.315-.156 9.368 0 11.024 5.022 11.024 7.765 0 4.244-2.433 6.779-5.279 9.058 4.244 1.449 9.42 5.124 9.42 11.178 0 5.538-4.296 11.284-13.82 11.284-.621 0-2.122-.103-3.623-.155a67.387 67.387 0 00-3.881-.155c-.57 0-1.708 0-2.951.051-1.19 0-2.536.104-3.571.104-.673 0-1.035-.155-1.035-.517 0-.259.207-.414.828-.414a8.54 8.54 0 001.863-.207c1.035-.207 1.294-1.347 1.501-2.848.259-2.174.259-6.263.259-11.024v-9.109zM127.909 170.83c0-7.867 0-9.317-.103-10.974-.104-1.758-.518-2.587-2.226-2.95-.414-.102-1.294-.154-2.018-.154-.57 0-.88-.104-.88-.466 0-.362.362-.467 1.138-.467 1.398 0 2.899.053 4.193.053 1.345.052 2.536.103 3.26.103 1.657 0 11.956 0 12.94-.051.983-.105 1.811-.207 2.225-.312.259-.05.57-.206.829-.206.258 0 .31.206.31.466 0 .362-.259.983-.413 3.364-.053.518-.156 2.795-.26 3.416-.051.259-.155.57-.517.57-.363 0-.466-.259-.466-.725 0-.362-.052-1.242-.311-1.863-.362-.932-.88-1.553-3.467-1.864-.88-.103-6.315-.207-7.35-.207-.259 0-.362.156-.362.518v13.095c0 .362.051.568.362.568 1.139 0 7.091 0 8.281-.102 1.242-.104 2.019-.26 2.485-.777.362-.415.569-.673.828-.673.207 0 .362.104.362.414 0 .311-.207 1.138-.414 3.779-.052 1.034-.207 3.105-.207 3.468 0 .414 0 .983-.466.983-.362 0-.466-.207-.466-.467-.051-.516-.051-1.189-.207-1.862-.259-1.035-.983-1.813-2.898-2.019-.984-.103-6.108-.156-7.35-.156-.259 0-.31.208-.31.519v4.088c0 1.76-.052 6.522 0 8.023.103 3.57.931 4.347 6.211 4.347 1.345 0 3.519 0 4.865-.621s1.967-1.708 2.329-3.831c.103-.569.207-.775.569-.775.415 0 .415.413.415.932 0 1.19-.415 4.71-.674 5.744-.362 1.346-.828 1.346-2.794 1.346-3.882 0-6.729-.103-8.955-.155-2.225-.104-3.83-.155-5.382-.155-.57 0-1.708 0-2.951.051-1.19 0-2.536.104-3.571.104-.673 0-1.035-.155-1.035-.517 0-.259.207-.414.828-.414.777 0 1.398-.105 1.863-.207 1.036-.207 1.294-1.347 1.501-2.848.259-2.174.259-6.263.259-11.024v-9.109M166.727 174.919c0 .569.103.775.465.932 1.087.362 2.64.517 3.933.517 2.071 0 2.744-.207 3.675-.88 1.553-1.138 3.054-3.519 3.054-7.763 0-7.35-4.865-9.472-7.918-9.472-1.295 0-2.227.052-2.744.207-.362.103-.465.31-.465.725v15.734zm-6.108-4.089c0-7.867 0-9.317-.104-10.974-.103-1.758-.517-2.587-2.225-2.95-.415-.102-1.294-.154-2.019-.154-.569 0-.88-.104-.88-.466 0-.362.362-.467 1.139-.467 2.743 0 6.004.156 7.091.156 1.759 0 5.693-.156 7.297-.156 3.262 0 6.729.312 9.524 2.227 1.449.983 3.519 3.623 3.519 7.091 0 3.83-1.604 7.349-6.831 11.593 4.606 5.796 8.178 10.403 11.231 13.613 2.898 3.002 5.02 3.364 5.797 3.519.57.104 1.035.156 1.449.156.414 0 .621.155.621.414 0 .413-.362.517-.983.517h-4.917c-2.898 0-4.192-.26-5.538-.983-2.226-1.191-4.193-3.623-7.091-7.609-2.071-2.846-4.451-6.366-5.124-7.142-.259-.311-.57-.362-.932-.362l-4.503-.104c-.259 0-.413.104-.413.414v.725c0 4.812 0 8.901.258 11.075.155 1.501.466 2.641 2.018 2.848.777.102 1.915.207 2.537.207.414 0 .621.155.621.414 0 .362-.362.517-1.036.517-3.001 0-6.832-.155-7.608-.155-.983 0-4.244.155-6.314.155-.673 0-1.036-.155-1.036-.517 0-.259.208-.414.829-.414a8.54 8.54 0 001.863-.207c1.035-.207 1.294-1.347 1.501-2.848.259-2.174.259-6.263.259-11.024v-9.109zM204.612 158.719l-7.712.206c-3.001.104-4.244.362-5.02 1.501-.518.777-.776 1.398-.88 1.811-.104.415-.259.622-.569.622-.363 0-.466-.259-.466-.828 0-.828.984-5.538 1.087-5.952.155-.673.31-.983.621-.983.414 0 .932.516 2.226.621 1.5.155 3.467.258 5.176.258h20.496c1.656 0 2.795-.156 3.571-.258.776-.155 1.19-.26 1.398-.26.362 0 .414.312.414 1.087 0 1.087-.156 4.659-.156 6.005-.051.517-.155.828-.466.828-.414 0-.517-.259-.569-1.035l-.052-.57c-.103-1.346-1.501-2.794-6.107-2.898l-6.522-.155v21.22c0 4.761 0 8.85.259 11.076.156 1.449.466 2.589 2.018 2.796.725.102 1.864.207 2.641.207.569 0 .828.155.828.414 0 .362-.415.517-.984.517-3.416 0-6.677-.155-8.126-.155-1.19 0-4.451.155-6.522.155-.672 0-1.034-.155-1.034-.517 0-.259.206-.414.828-.414a8.54 8.54 0 001.863-.207c1.035-.207 1.346-1.347 1.501-2.848.258-2.174.258-6.263.258-11.024v-21.22M231.629 194.327c-.828-.361-.983-.62-.983-1.759 0-2.847.207-5.952.258-6.78.052-.776.207-1.346.621-1.346.466 0 .518.465.518.88 0 .672.207 1.76.466 2.64 1.138 3.83 4.192 5.226 7.401 5.226 4.658 0 6.936-3.156 6.936-5.9 0-2.536-.777-4.917-5.073-8.281l-2.38-1.862c-5.694-4.452-7.661-8.076-7.661-12.267 0-5.693 4.762-9.782 11.956-9.782 3.365 0 5.539.516 6.884.879.466.104.725.259.725.622 0 .672-.207 2.173-.207 6.21 0 1.139-.155 1.553-.569 1.553-.363 0-.518-.31-.518-.931 0-.466-.259-2.071-1.346-3.416-.776-.984-2.277-2.537-5.641-2.537-3.831 0-6.16 2.226-6.16 5.331 0 2.381 1.191 4.193 5.487 7.454l1.449 1.087c6.263 4.709 8.488 8.281 8.488 13.197 0 3.003-1.138 6.574-4.865 9.006-2.588 1.656-5.486 2.123-8.23 2.123-3.001 0-5.331-.362-7.556-1.347M286.231 174.919c0 .569.104.775.466.932 1.087.362 2.64.517 3.934.517 2.07 0 2.743-.207 3.675-.88 1.552-1.138 3.053-3.519 3.053-7.763 0-7.35-4.865-9.472-7.919-9.472-1.294 0-2.225.052-2.743.207-.362.103-.466.31-.466.725v15.734zm-6.107-4.089c0-7.867 0-9.317-.103-10.974-.104-1.758-.518-2.587-2.226-2.95-.414-.102-1.294-.154-2.019-.154-.569 0-.88-.104-.88-.466 0-.362.363-.467 1.139-.467 2.743 0 6.004.156 7.091.156 1.76 0 5.693-.156 7.298-.156 3.261 0 6.728.312 9.523 2.227 1.449.983 3.52 3.623 3.52 7.091 0 3.83-1.605 7.349-6.832 11.593 4.606 5.796 8.178 10.403 11.231 13.613 2.899 3.002 5.021 3.364 5.797 3.519a8.113 8.113 0 001.449.156c.414 0 .621.155.621.414 0 .413-.362.517-.983.517h-4.917c-2.898 0-4.192-.26-5.538-.983-2.226-1.191-4.192-3.623-7.091-7.609-2.07-2.846-4.451-6.366-5.124-7.142-.259-.311-.569-.362-.932-.362l-4.502-.104c-.259 0-.415.104-.415.414v.725c0 4.812 0 8.901.259 11.075.156 1.501.466 2.641 2.019 2.848.776.102 1.915.207 2.536.207.414 0 .621.155.621.414 0 .362-.362.517-1.035.517-3.002 0-6.832-.155-7.609-.155-.983 0-4.244.155-6.314.155-.673 0-1.035-.155-1.035-.517 0-.259.207-.414.828-.414a8.54 8.54 0 001.863-.207c1.035-.207 1.294-1.347 1.501-2.848.259-2.174.259-6.263.259-11.024v-9.109z"
            />
            <path
              d="M319.2 170.83c0-7.867 0-9.317-.103-10.974-.104-1.758-.518-2.587-2.226-2.95-.414-.102-1.294-.154-2.018-.154-.57 0-.88-.104-.88-.466 0-.362.362-.467 1.138-.467 1.398 0 2.899.053 4.193.053 1.345.052 2.536.103 3.26.103 1.657 0 11.957 0 12.94-.051.983-.105 1.811-.207 2.225-.312.259-.05.57-.206.829-.206.258 0 .31.206.31.466 0 .362-.259.983-.414 3.364-.052.518-.155 2.795-.259 3.416-.051.259-.155.57-.517.57-.363 0-.466-.259-.466-.725 0-.362-.052-1.242-.311-1.863-.362-.932-.88-1.553-3.467-1.864-.88-.103-6.315-.207-7.35-.207-.259 0-.362.156-.362.518v13.095c0 .362.051.568.362.568 1.139 0 7.091 0 8.281-.102 1.242-.104 2.019-.26 2.485-.777.362-.415.569-.673.828-.673.207 0 .362.104.362.414 0 .311-.207 1.138-.414 3.779-.052 1.034-.207 3.105-.207 3.468 0 .414 0 .983-.466.983-.362 0-.466-.207-.466-.467-.051-.516-.051-1.189-.207-1.862-.259-1.035-.983-1.813-2.898-2.019-.984-.103-6.108-.156-7.35-.156-.259 0-.31.208-.31.519v4.088c0 1.76-.052 6.522 0 8.023.103 3.57.931 4.347 6.211 4.347 1.345 0 3.519 0 4.865-.621s1.967-1.708 2.329-3.831c.103-.569.207-.775.569-.775.414 0 .414.413.414.932 0 1.19-.414 4.71-.672 5.744-.363 1.346-.829 1.346-2.795 1.346-3.882 0-6.729-.103-8.955-.155-2.225-.104-3.83-.155-5.382-.155-.57 0-1.708 0-2.951.051-1.19 0-2.536.104-3.571.104-.673 0-1.035-.155-1.035-.517 0-.259.207-.414.828-.414.777 0 1.398-.105 1.863-.207 1.036-.207 1.294-1.347 1.501-2.848.259-2.174.259-6.263.259-11.024v-9.109M349.063 194.327c-.828-.361-.983-.62-.983-1.759 0-2.847.207-5.952.259-6.78.052-.776.207-1.346.621-1.346.466 0 .518.465.518.88 0 .672.207 1.76.465 2.64 1.139 3.83 4.193 5.226 7.402 5.226 4.658 0 6.935-3.156 6.935-5.9 0-2.536-.776-4.917-5.072-8.281l-2.381-1.862c-5.693-4.452-7.66-8.076-7.66-12.267 0-5.693 4.762-9.782 11.956-9.782 3.364 0 5.538.516 6.884.879.466.104.724.259.724.622 0 .672-.207 2.173-.207 6.21 0 1.139-.155 1.553-.569 1.553-.362 0-.517-.31-.517-.931 0-.466-.259-2.071-1.346-3.416-.777-.984-2.278-2.537-5.642-2.537-3.83 0-6.159 2.226-6.159 5.331 0 2.381 1.19 4.193 5.486 7.454l1.45 1.087c6.262 4.709 8.488 8.281 8.488 13.197 0 3.003-1.139 6.574-4.865 9.006-2.588 1.656-5.487 2.123-8.23 2.123-3.002 0-5.331-.362-7.557-1.347M411.431 176.368c0-11.594-6.677-18.788-15.165-18.788-5.953 0-12.733 3.313-12.733 16.2 0 10.765 5.952 19.306 15.89 19.306 3.623 0 12.008-1.76 12.008-16.718zm-35.04-.983c0-8.851 5.847-20.289 21.376-20.289 12.887 0 20.91 7.504 20.91 19.357s-8.281 21.221-21.428 21.221c-14.854 0-20.858-11.129-20.858-20.289zM435.601 174.919c0 .569.103.775.465.932 1.086.362 2.639.517 3.933.517 2.071 0 2.744-.207 3.676-.88 1.553-1.138 3.054-3.519 3.054-7.763 0-7.35-4.866-9.472-7.92-9.472-1.294 0-2.225.052-2.743.207-.362.103-.465.31-.465.725v15.734zm-6.108-4.089c0-7.867 0-9.317-.103-10.974-.104-1.758-.519-2.587-2.226-2.95-.415-.102-1.294-.154-2.018-.154-.57 0-.881-.104-.881-.466 0-.362.362-.467 1.139-.467 2.743 0 6.004.156 7.091.156 1.76 0 5.693-.156 7.298-.156 3.261 0 6.728.312 9.523 2.227 1.45.983 3.52 3.623 3.52 7.091 0 3.83-1.605 7.349-6.832 11.593 4.606 5.796 8.178 10.403 11.231 13.613 2.899 3.002 5.021 3.364 5.797 3.519.57.104 1.035.156 1.449.156.415 0 .622.155.622.414 0 .413-.363.517-.984.517h-4.917c-2.898 0-4.192-.26-5.538-.983-2.226-1.191-4.192-3.623-7.091-7.609-2.07-2.846-4.452-6.366-5.124-7.142-.26-.311-.569-.362-.931-.362l-4.503-.104c-.259 0-.414.104-.414.414v.725c0 4.812 0 8.901.257 11.075.157 1.501.467 2.641 2.019 2.848.777.102 1.916.207 2.537.207.413 0 .621.155.621.414 0 .362-.362.517-1.036.517-3.001 0-6.831-.155-7.607-.155-.984 0-4.245.155-6.315.155-.673 0-1.035-.155-1.035-.517 0-.259.207-.414.828-.414.776 0 1.398-.105 1.863-.207 1.035-.207 1.294-1.347 1.5-2.848.26-2.174.26-6.263.26-11.024v-9.109zM473.486 158.719l-7.712.206c-3.002.104-4.244.362-5.02 1.501-.518.777-.776 1.398-.88 1.811-.103.415-.259.622-.569.622-.363 0-.466-.259-.466-.828 0-.828.983-5.538 1.087-5.952.155-.673.31-.983.621-.983.414 0 .932.516 2.225.621 1.501.155 3.468.258 5.176.258h20.496c1.657 0 2.795-.156 3.572-.258.776-.155 1.19-.26 1.397-.26.362 0 .414.312.414 1.087 0 1.087-.155 4.659-.155 6.005-.052.517-.155.828-.466.828-.414 0-.518-.259-.569-1.035l-.052-.57c-.104-1.346-1.501-2.794-6.107-2.898l-6.522-.155v21.22c0 4.761 0 8.85.259 11.076.155 1.449.466 2.589 2.018 2.796.725.102 1.864.207 2.64.207.569 0 .828.155.828.414 0 .362-.414.517-.983.517-3.416 0-6.677-.155-8.126-.155-1.191 0-4.451.155-6.522.155-.673 0-1.035-.155-1.035-.517 0-.259.207-.414.828-.414.777 0 1.398-.105 1.864-.207 1.035-.207 1.345-1.347 1.501-2.848.258-2.174.258-6.263.258-11.024v-21.22M500.503 194.327c-.828-.361-.983-.62-.983-1.759 0-2.847.207-5.952.258-6.78.052-.776.207-1.346.621-1.346.466 0 .518.465.518.88 0 .672.207 1.76.466 2.64 1.138 3.83 4.192 5.226 7.401 5.226 4.658 0 6.936-3.156 6.936-5.9 0-2.536-.777-4.917-5.073-8.281l-2.38-1.862c-5.694-4.452-7.661-8.076-7.661-12.267 0-5.693 4.762-9.782 11.957-9.782 3.364 0 5.538.516 6.883.879.466.104.725.259.725.622 0 .672-.207 2.173-.207 6.21 0 1.139-.155 1.553-.569 1.553-.363 0-.518-.31-.518-.931 0-.466-.259-2.071-1.346-3.416-.776-.984-2.277-2.537-5.641-2.537-3.83 0-6.16 2.226-6.16 5.331 0 2.381 1.191 4.193 5.487 7.454l1.449 1.087c6.263 4.709 8.488 8.281 8.488 13.197 0 3.003-1.138 6.574-4.865 9.006-2.588 1.656-5.486 2.123-8.229 2.123-3.002 0-5.331-.362-7.557-1.347M94.19 214.97h-2.338v20.138h13.195v-2.256H94.19V214.97M111.165 235.108h2.311V214.97h-2.311zM128.7 231.896l-6.849-16.926h-2.52l8.284 20.193h2.17l8.284-20.193h-2.519l-6.85 16.926M146.014 226.07h11.297v-2.201h-11.297v-6.643h11.848v-2.256h-14.159v20.138h14.49v-2.284h-12.179v-6.754M174.973 217.17h6.971v17.938h2.339V217.17h6.971v-2.173h-16.281v2.173M211.148 224.145H199.71v-9.175h-2.339v20.138h2.339v-8.762h11.438v8.762h2.339V214.97h-2.339v9.175M223.322 226.07h11.297v-2.201h-11.297v-6.643h11.848v-2.256h-14.159v20.138h14.49v-2.284h-12.179v-6.754M261.897 226.318h6.724v4.786c-1.475 1.289-3.401 1.996-5.443 1.996-5.971 0-8.09-4.329-8.09-8.037-.015-2.35.793-4.464 2.273-5.954 1.44-1.448 3.451-2.213 5.817-2.213 2.193 0 4.4.88 5.9 2.357l.316.31 1.427-1.567-.292-.287a10.414 10.414 0 00-7.351-3.016c-3.043 0-5.647 1.001-7.532 2.894-1.873 1.882-2.855 4.478-2.842 7.507 0 5.107 3.208 10.261 10.374 10.261 2.877 0 5.426-1.088 7.573-3.237l.125-.125v-7.82h-8.979v2.145M287.504 233.21c-5.352 0-7.816-4.237-7.841-8.174-.015-2.419.78-4.557 2.235-6.022 1.378-1.387 3.317-2.118 5.606-2.118 5.435 0 7.868 4.089 7.868 8.142 0 3.937-2.462 8.172-7.868 8.172zm0-18.544c-7.013 0-10.151 5.196-10.151 10.345 0 5.022 3.176 10.427 10.151 10.427 6.936 0 10.125-5.375 10.152-10.37.016-3.023-1.012-5.731-2.896-7.625-1.808-1.817-4.317-2.777-7.256-2.777zM313.787 216.896c5.436 0 7.868 4.089 7.868 8.142 0 3.937-2.462 8.172-7.868 8.172-5.35 0-7.814-4.237-7.84-8.174-.014-2.419.78-4.557 2.235-6.022 1.378-1.387 3.316-2.118 5.605-2.118zm0-2.23c-7.013 0-10.151 5.196-10.151 10.345 0 5.022 3.177 10.427 10.151 10.427 6.938 0 10.126-5.375 10.152-10.37.017-3.023-1.012-5.73-2.895-7.625-1.808-1.816-4.316-2.777-7.257-2.777zM337.563 232.824h-4.617v-15.598h4.617c5.329 0 7.791 3.818 7.869 7.6.045 2.242-.746 4.362-2.172 5.816-1.4 1.427-3.368 2.182-5.697 2.182zm0-17.854h-6.956v20.138h6.956c3.036 0 5.607-.989 7.437-2.86 1.825-1.868 2.835-4.579 2.771-7.439-.115-4.898-3.314-9.839-10.208-9.839zM368.461 214.97h-2.34v20.138h13.195v-2.256h-10.855V214.97M385.435 235.108h2.311V214.97h-2.311zM395.271 235.136h2.338v-8.735h11.105v-2.256h-11.105v-6.837h11.49v-2.338h-13.828v20.166M417.97 232.824v-6.754h11.297v-2.201H417.97v-6.643h11.847v-2.256h-14.16v20.138h14.491v-2.284H417.97M357.324 124.944c-63.962-36.736-106.061-93.646-106.061-93.646s-23.375 31.334-45.229 50.74c.917-.362-.111.18.79-.221-1.007.536 0 0-.79.221 0 0 17.388 3.807 43.999-22.312 0 0 57.596 62.471 109.728 66.946l-2.437-1.728"
              fill="#2E424B"
            />
            <path
              d="M113.387 120.412c1.346-.22 0 0 0 0l-.405.11c12.301-3.353 32.665-12.637 64.351-38.986 0 0 46.919 55.352 102.777 56.841-9.765-4.284-18.939-9.257-27.696-14.838-4.371-2.799-8.666-5.684-12.823-8.774l-3.142-2.265-3.074-2.369-3.083-2.341-3.017-2.435c-8.067-6.452-15.801-13.313-23.336-20.378-3.714-3.59-7.451-7.156-11.047-10.855l-5.35-5.572c-1.74-1.848-3.543-3.803-5.098-5.604l-4.656-5.394s-27.203 33.037-64.829 62.972"
              fill="#2E424B"
            />
            <path
              d="M342.002 53.942l.058.073c.13-.211.128-.258-.058-.073"
              fill="#0094BC"
            />
            <path
              d="M390.613 112.416l-.001-.002c6.514 2.781 13.414 4.718 20.532 5.26 0 0-1.44-.787-3.866-2.153-14.266-8.265-27.784-20.062-38.776-31.132-14.387-15.092-25.84-29.608-26.442-30.374-.812 1.31-7.296 9.62-14.072 17.279-4.3 4.863-15.552 16.631-15.552 16.631.207.013.476-.038.766-.112 3.447-.565 14.927-1.482 28.348-14.682 2.512 3.325 11.088 13.994 25.244 24.74 6.947 5.493 15.017 10.781 23.797 14.533l.022.012"
              fill="#2E424B"
            />
            <path
              d="M295.613 66.842c-.955-1.777-1.683-3.668-2.353-5.606l-.771-2.971-.371-1.511-.176-.761-.102-.768c-.262-2.051-.601-4.147-.545-6.253-.011-1.055-.032-2.121.018-3.183l.323-3.183c.056-.534.108-1.071.189-1.603l.34-1.572.701-3.172c.318-1.033.673-2.058 1.026-3.091l.534-1.551c.205-.506.44-.997.662-1.497.453-.995.897-2.004 1.376-2.997.531-.961 1.108-1.898 1.669-2.852l.854-1.426c.298-.468.641-.901.962-1.353.649-.9 1.321-1.787 1.998-2.675 2.912-3.346 6.086-6.604 9.864-9.098.914-.665 1.832-1.331 2.829-1.871.974-.577 1.965-1.131 2.96-1.683 1.004-.528 2.064-.945 3.101-1.417 1.046-.451 2.077-.95 3.173-1.269 8.628-2.958 18.058-3.805 27.077-1.903l3.36.779c1.111.286 2.186.705 3.278 1.059 2.205.663 4.265 1.693 6.352 2.641 4.028 2.176 7.925 4.648 11.237 7.795 6.792 6.087 11.718 14.083 14.264 22.637.385 1.045.582 2.152.82 3.238.212 1.093.49 2.166.633 3.263l.353 3.295c.05.548.13 1.09.142 1.639l-.01 1.649c.135 4.373-.499 8.711-1.613 12.844-1.166 4.125-2.857 8.047-5.099 11.561a41.093 41.093 0 01-3.678 4.973c-.69.761-1.381 1.508-2.137 2.196a69.355 69.355 0 01-2.221 2.048c3.521-7.226 5.418-14.689 5.553-21.972a42.545 42.545 0 00-.194-5.401 53.9 53.9 0 00-.315-2.652l-.513-2.606-.248-1.29c-.102-.425-.245-.843-.359-1.264l-.713-2.504c-.253-.825-.631-1.614-.932-2.417-.34-.791-.566-1.615-.996-2.365l-1.138-2.287a7.522 7.522 0 00-.63-1.105l-.679-1.076c-.476-.7-.81-1.477-1.362-2.126l-1.505-2.02c-.459-.7-1.105-1.262-1.643-1.898-.589-.594-1.05-1.294-1.69-1.836-1.224-1.132-2.375-2.326-3.737-3.282-5.151-4.155-11.27-6.926-17.658-8.21-.398-.085-.789-.214-1.194-.266l-1.216-.152-2.431-.328-2.459-.063c-.819-.034-1.64-.071-2.459.01l-2.463.127c-.414 0-.819.065-1.223.137l-1.217.192c-.806.153-1.642.187-2.43.424-.792.219-1.596.397-2.4.591-6.396 1.683-12.334 5.108-17.487 9.613a78.28 78.28 0 01-1.833 1.807c-.307.303-.639.588-.928.908l-.839.987c-.557.662-1.142 1.312-1.693 1.99-.49.716-1.015 1.417-1.53 2.133-.256.358-.529.709-.774 1.076l-.664 1.142a114.37 114.37 0 01-1.365 2.298l-1.156 2.424-.589 1.225-.471 1.27c-2.633 6.767-3.906 14.397-3.439 22.415"
              fill="#E49F3E"
            />
          </g>
        </svg>
      </Link>
    </Box>
  )
}

export default Logo
