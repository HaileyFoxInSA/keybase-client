//
//  KBTextLabel.h
//  Keybase
//
//  Created by Gabriel on 1/9/15.
//  Copyright (c) 2015 Gabriel Handford. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>

@interface KBTextLabel : NSTextView

@property (nonatomic) NSAttributedString *attributedText;
@property (nonatomic) NSTextAlignment textAlignment;
@property (nonatomic) NSString *placeholder;

- (void)setText:(NSString *)text;

- (void)setPlaceholder:(NSString *)placeholder;

@end
