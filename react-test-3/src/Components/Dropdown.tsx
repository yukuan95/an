import { Dropdown, Button, ConfigProvider, theme } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { css } from '@emotion/css'

type Props = { value: string; array: Array<string>; width: string; isDarkMode: boolean; onChange: (res: string) => void }

function Dropdown2({ value, array, width, isDarkMode, onChange }: Props) {
  const items = array.map((item: string) => ({ label: item, key: item }))
  const menuProps = {
    items, onClick: (res: any) => onChange(res.key),
  }
  return <div>
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Button: {
            defaultColor: isDarkMode ? '#FFFFFF' : '#000000',
            defaultHoverColor: isDarkMode ? '#FFFFFF' : '#000000',
            defaultActiveColor: isDarkMode ? '#FFFFFF' : '#000000',
          },
        },
      }}>
      <Dropdown menu={menuProps} trigger={['click']}>
        <Button className={css` width: ${width}; justify-content: space-between; `}
          icon={<DownOutlined />} iconPlacement="end">
          {array.find((item) => item === value) ? value : ''}
        </Button>
      </Dropdown>
    </ConfigProvider>
  </div >
}


export { Dropdown2 as Dropdown }