// @flow
import * as React from 'react'
import * as Constants from '../../constants/provision'
import {
  NameWithIcon,
  ButtonBar,
  BackButton,
  Box2,
  Text,
  PlainInput,
  WaitingButton,
} from '../../common-adapters'
import {globalColors, globalMargins, styleSheetCreate, isMobile, platformStyles} from '../../styles'

type Props = {
  onBack: () => void,
  onSubmit: () => void,
  onChangePaperKey: (val: string) => void,
  paperKey: string,
  hint: string,
  error: string,
  waitingForResponse?: ?boolean,
}

const PaperKey = (props: Props) => (
  <Box2 direction="vertical" fullWidth={true} fullHeight={true} gap="medium">
    <BackButton onClick={props.onBack} style={styles.backButton} />
    <Box2
      direction="vertical"
      style={styles.contents}
      centerChildren={true}
      gap={isMobile ? 'tiny' : 'medium'}
    >
      <NameWithIcon icon="icon-paper-key-48" title={props.hint} />
      <Box2 direction="vertical" style={styles.inputContainer}>
        <PlainInput
          autoFocus={true}
          multiline={true}
          rowsMax={3}
          placeholder="Type in your paper key"
          textType="Header"
          style={styles.input}
          onEnterKeyDown={props.onSubmit}
          onChangeText={props.onChangePaperKey}
          value={props.paperKey}
        />
      </Box2>
      {!!props.error && <Text type="BodyError">{props.error}</Text>}
      <ButtonBar fullWidth={true} noPadding={true}>
        <WaitingButton
          label="Continue"
          type="Primary"
          fullWidth={true}
          onClick={props.onSubmit}
          enabled={!!props.paperKey}
          waitingKey={Constants.waitingKey}
        />
      </ButtonBar>
    </Box2>
  </Box2>
)

const styles = styleSheetCreate({
  backButton: platformStyles({
    isElectron: {
      marginLeft: globalMargins.medium,
      marginTop: globalMargins.medium,
    },
    isMobile: {
      marginLeft: 0,
      marginTop: 0,
    },
  }),
  contents: {
    maxWidth: isMobile ? 300 : 460,
    width: '100%',
  },
  input: {
    color: globalColors.black,
  },
  inputContainer: {
    borderColor: globalColors.black_10,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    minHeight: 77,
    padding: globalMargins.small,
    width: '100%',
  },
})

export default PaperKey
