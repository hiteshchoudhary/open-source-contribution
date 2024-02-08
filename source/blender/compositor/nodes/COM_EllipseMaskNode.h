/* SPDX-FileCopyrightText: 2011 Blender Authors
 *
 * SPDX-License-Identifier: GPL-2.0-or-later */

#pragma once

#include "COM_Node.h"

namespace blender::compositor {

/**
 * \brief EllipseMaskNode
 * \ingroup Node
 */
class EllipseMaskNode : public Node {
 public:
  EllipseMaskNode(bNode *editor_node);
  void convert_to_operations(NodeConverter &converter,
                             const CompositorContext &context) const override;
};

}  // namespace blender::compositor
